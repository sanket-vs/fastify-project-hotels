/**
 * This is the Sequelize ORM client that we are using the handle the MySQL database operations.
 */

const { Sequelize, DataTypes, fn, col, Op } = require('sequelize');
const mysql2 = require('mysql2');

const { RDS_DATABASE, RDS_PASSWORD, RDS_HOSTNAME, RDS_USERNAME, RDS_PORT, TIMEZONE } = require("../common/constants").ENV_VARS;

let gSequelize = null;

const initializePool = () => {
    console.log(`initializePool: Connecting with "${RDS_DATABASE}" on "${RDS_HOSTNAME}"`)
    const sequelize = new Sequelize({
        database: RDS_DATABASE,
        username: RDS_USERNAME,
        password: RDS_PASSWORD,
        host: RDS_HOSTNAME,
        port: RDS_PORT,
        dialect: 'mysql',
        dialectModule: mysql2,
        dialectOptions: {
            dateStrings: true,
            typeCast: true,
            timezone: '+00:00'
        },
        timezone: '+00:00', //for writing to database
        pool: {
            /*
             * Lambda functions process one request at a time but your code may issue multiple queries
             * concurrently. Be wary that `sequelize` has methods that issue 2 queries concurrently
             * (e.g. `Model.findAndCountAll()`). Using a value higher than 1 allows concurrent queries to
             * be executed in parallel rather than serialized. Careful with executing too many queries in
             * parallel per Lambda function execution since that can bring down your database with an
             * excessive number of connections.
             *
             * Ideally you want to choose a `max` number where this holds true:
             * max * EXPECTED_MAX_CONCURRENT_LAMBDA_INVOCATIONS < MAX_ALLOWED_DATABASE_CONNECTIONS * 0.8
             */
            max: 2,
            /*
             * Set this value to 0 so connection pool eviction logic eventually cleans up all connections
             * in the event of a Lambda function timeout.
             */
            min: 0,
            /*
             * Set this value to 0 so connections are eligible for cleanup immediately after they're
             * returned to the pool.
             */
            idle: 0,
            // Choose a small enough value that fails fast if a connection takes too long to be established.
            acquire: 3000,
            /*
             * Ensures the connection pool attempts to be cleaned up automatically on the next Lambda
             * function invocation, if the previous invocation timed out.
             */
            evict: 29000
        }
    });

    // or `sequelize.sync()`
    try {
        // await sequelize.authenticate();
         console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        throw error;
    }

    return sequelize;
}

const initializeSequelizeClient = () => {
    // re-use the sequelize instance across invocations to improve performance
    if (!gSequelize) {
        console.log('Going to initialize connection Pool...');
        gSequelize = initializePool();
    } else {
        console.log('Connection Pool is already initialized...');
        // restart connection pool to ensure connections are not re-used across invocations
        gSequelize.connectionManager.initPools();

        // restore `getConnection()` if it has been overwritten by `close()`
        if (gSequelize.connectionManager.hasOwnProperty("getConnection")) {
            delete gSequelize.connectionManager.getConnection;
        }
    }
    return gSequelize;
};



const closeSequelizeConnectionManager = async () => {
    // close any opened connections during the invocation
    // this will wait for any in-progress queries to finish before closing the connections
    if (gSequelize) {
        await gSequelize.connectionManager.close();
    }
}

const getSequelize = () => {
    return initializeSequelizeClient();
}

module.exports = {
    initializeSequelizeClient,
    closeSequelizeConnectionManager,
    getSequelize,
    DataTypes,
    sequelizeFunction: fn,
    sequelizeColumns: col,
    sequelizeOp: Op
}