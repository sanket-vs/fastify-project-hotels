(()=>{"use strict";var e={835:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{l(r.next(e))}catch(e){s(e)}}function a(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}l((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,s,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(a){return function(l){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;s&&(s=0,a[0]&&(i=0)),i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.sequelizeOp=t.sequelizeColumns=t.sequelizeFunction=t.DataTypes=t.getSequelize=t.closeSequelizeConnectionManager=t.initializeSequelizeClient=void 0;var i=n(496),a=i.Sequelize,l=i.DataTypes,c=i.fn,u=i.col,p=i.Op;t.DataTypes=l,t.sequelizeFunction=c,t.sequelizeColumns=u,t.sequelizeOp=p;var d=s(n(993)),f=n(196),h=f.ENV_VARS.RDS_DATABASE,y=f.ENV_VARS.RDS_PASSWORD,g=f.ENV_VARS.RDS_HOSTNAME,b=f.ENV_VARS.RDS_USERNAME,v=f.ENV_VARS.RDS_PORT,m=(f.ENV_VARS.TIMEZONE,null),S=function(){return m?(console.log("Connection Pool is already initialized..."),m.connectionManager.initPools(),m.connectionManager.hasOwnProperty("getConnection")&&delete m.connectionManager.getConnection):(console.log("Going to initialize connection Pool..."),m=function(){console.log('initializePool: Connecting with "'.concat(h,'" on "').concat(g,'"'));var e=new a({database:h,username:b,password:y,host:g,port:v,dialect:"mysql",dialectModule:d.default,dialectOptions:{dateStrings:!0,typeCast:!0,timezone:"+00:00"},timezone:"+00:00",pool:{max:2,min:0,idle:0,acquire:3e3,evict:29e3}});try{console.log("Connection has been established successfully.")}catch(e){throw console.error("Unable to connect to the database:",e),e}return e}()),m};t.initializeSequelizeClient=S,t.closeSequelizeConnectionManager=function(){return r(void 0,void 0,void 0,(function(){return o(this,(function(e){switch(e.label){case 0:return m?[4,m.connectionManager.close()]:[3,2];case 1:e.sent(),e.label=2;case 2:return[2]}}))}))},t.getSequelize=function(){return S()}},196:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ENV_VARS=void 0,n(142).config();var r={RDS_HOSTNAME:process.env.RDS_HOSTNAME,RDS_PASSWORD:process.env.RDS_PASSWORD,RDS_USERNAME:process.env.RDS_USERNAME,RDS_DATABASE:process.env.RDS_DATABASE,RDS_PORT:process.env.RDS_PORT,TIMEZONE:process.env.TIMEZONE};t.ENV_VARS=r},182:function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)},o=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{l(r.next(e))}catch(e){s(e)}}function a(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}l((r=r.apply(e,t||[])).next())}))},s=this&&this.__generator||function(e,t){var n,r,o,s,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(a){return function(l){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;s&&(s=0,a[0]&&(i=0)),i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.deleteOne=t.patch=t.post=t.getOne=t.getAll=void 0;var i=n(835),a=n(230),l=function(e){var t={};return e.name&&(t.name=e.name),e.location&&(t.location=e.location),t};t.getAll=function(e,t){return o(void 0,void 0,void 0,(function(){var n,r,o,l,c;return s(this,(function(s){switch(s.label){case 0:return s.trys.push([0,2,,3]),n=e.query.search_term,r={},n&&(r.name=((c={})[i.sequelizeOp.like]="%".concat(n,"%"),c)),[4,a.Hotel.findAll({where:r,raw:!0})];case 1:return o=s.sent(),console.log("hotelsController: getAll::result",o),o.length?(t.code(200).send({data:o}),[3,3]):[2,t.code(404).send({message:"There are no hotels"})];case 2:return l=s.sent(),console.log("hotelsController: getAll::",l.message),t.code(500).send({message:l.message}),[3,3];case 3:return[2]}}))}))},t.getOne=function(e,t){return o(void 0,void 0,void 0,(function(){var n,r,o;return s(this,(function(s){switch(s.label){case 0:return s.trys.push([0,2,,3]),n=e.params.id,[4,a.Hotel.findOne({where:{id:n},raw:!0})];case 1:return r=s.sent(),console.log("hotel ::",r),r?(t.code(200).send({data:r}),[3,3]):[2,t.code(404).send({message:"Resource doesnt exist"})];case 2:return o=s.sent(),console.log("hotelsController: getOne::",o.message),t.code(500).send({message:o.message}),[3,3];case 3:return[2]}}))}))},t.post=function(e,t){return o(void 0,void 0,void 0,(function(){var n,r,o;return s(this,(function(s){switch(s.label){case 0:return s.trys.push([0,2,,3]),n=e.body,r=l(n),[4,a.Hotel.create(r)];case 1:return s.sent(),t.code(201).send({data:"Resource created!"}),[3,3];case 2:return o=s.sent(),console.log("hotelsController: post::",o.message),t.code(500).send({message:o.message}),[3,3];case 3:return[2]}}))}))},t.patch=function(e,t){return o(void 0,void 0,void 0,(function(){var n,o,i,c;return s(this,(function(s){switch(s.label){case 0:return s.trys.push([0,2,,3]),n=e.params.id,o=e.body,i=l(o),[4,a.Hotel.update(r({},i),{where:{id:n}})];case 1:if(0===s.sent()[0])throw Error("There is nothing to update!");return t.send({data:"Record updated Successfully!"}),[3,3];case 2:return c=s.sent(),console.log("hotelsController: patch::",c.message),t.code(500).send({message:c.message}),[3,3];case 3:return[2]}}))}))},t.deleteOne=function(e,t){return o(void 0,void 0,void 0,(function(){var n,r;return s(this,(function(o){switch(o.label){case 0:return o.trys.push([0,2,,3]),n=e.params.id,[4,a.Hotel.destroy({where:{id:n}})];case 1:if(0===o.sent())throw Error("The resource doesnt exist!");return t.send({data:"Record deleted Successfully!"}),[3,3];case 2:return r=o.sent(),console.log(r.message),t.code(500).send({message:r.message}),[3,3];case 3:return[2]}}))}))}},492:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,s){function i(e){try{l(r.next(e))}catch(e){s(e)}}function a(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}l((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,s,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(a){return function(l){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;s&&(s=0,a[0]&&(i=0)),i;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,r=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!((o=(o=i.trys).length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,l])}}},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=s(n(442)),a=s(n(126)),l=n(774),c=(0,i.default)();r(void 0,void 0,void 0,(function(){return o(this,(function(e){switch(e.label){case 0:return[4,c.register(a.default,{})];case 1:return e.sent(),[4,c.register(l,{routePrefix:"/docs",swagger:{info:{title:"Fastify App Documentation",description:"Fastify Hotels App Documentation description",version:"0.1.0"},host:"127.0.0.1:3000",basePath:"",schemes:["http","https"],consumes:["application/json"],produces:["application/json"],tags:[{name:"Hotel",description:"Hotel's API"}]},uiConfig:{docExpansion:"none",deepLinking:!0},uiHooks:{onRequest:function(e,t,n){n()},preHandler:function(e,t,n){n()}},staticCSP:!1,transformStaticCSP:function(e){return e},exposeRoute:!0})];case 2:return e.sent(),c.register(n(995)),[4,c.ready()];case 3:return e.sent(),c.swagger(),c.listen({port:3e3,host:"localhost"},(function(e,t){e&&(console.error(e),process.exit(1)),console.log("Listening on port 3000")})),[2]}}))}))},109:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.sequelizeOp=t.DataTypes=t.getSequelize=void 0;var r=n(835);Object.defineProperty(t,"getSequelize",{enumerable:!0,get:function(){return r.getSequelize}}),Object.defineProperty(t,"DataTypes",{enumerable:!0,get:function(){return r.DataTypes}}),Object.defineProperty(t,"sequelizeOp",{enumerable:!0,get:function(){return r.sequelizeOp}})},230:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Hotel=void 0;var r=n(109),o=r.DataTypes.BIGINT,s=r.DataTypes.STRING,i=(0,r.getSequelize)().define("Hotel",{id:{type:o,allowNull:!1,primaryKey:!0,autoIncrement:!0},name:{type:s,allowNull:!1},location:{type:s,allowNull:!1}},{tableName:"hotels",timestamps:!1});t.Hotel=i},995:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var r=n(182),o={type:"object",properties:{id:{type:"number"},name:{type:"string"},location:{type:"string"}}},s={schema:{descripttion:"Get all hotels",tags:["hotel"],query:{type:"object",properties:{search_term:{type:"string",description:"Search for hotels by a search-term"}}},response:{200:{type:"object",properties:{data:{type:"array",items:o}}},404:{type:"object",properties:{message:{type:"string"}}}}},handler:r.getAll},i={schema:{descripttion:"Get hotel using hotel-id",tags:["hotel"],params:{type:"object",properties:{id:{type:"number",description:"hotel id"}}},response:{200:{type:"object",properties:{data:o}},404:{type:"object",properties:{message:{type:"string"}}}}},handler:r.getOne},a={schema:{descripttion:"Add new hotel",tags:["hotel"],body:{type:"object",required:["name","location"],properties:{name:{type:"string"},location:{type:"string"}}},response:{201:{type:"object",properties:{data:{type:"string"}}}}},handler:r.post},l={schema:{descripttion:"Delete hotel by id",tags:["hotel"],params:{type:"object",properties:{id:{type:"number",description:"hotel id"}}},response:{200:{type:"object",properties:{data:{type:"string"}}},500:{type:"object",properties:{message:{type:"string"}}}}},handler:r.deleteOne},c={schema:{descripttion:"Update hotel details by id",tags:["hotel"],body:{type:"object",properties:{name:{type:"string"},location:{type:"string"}}},params:{type:"object",properties:{id:{type:"number",description:"hotel id"}}},response:{200:{type:"object",properties:{data:{type:"string"}}},500:{type:"object",properties:{message:{type:"string"}}}}},handler:r.patch};e.exports=function(e,t,n){e.get("/hotels",s),e.get("/hotels/:id",i),e.post("/hotels",a),e.delete("/hotels/:id",l),e.patch("/hotels/:id",c),n()}},126:e=>{e.exports=require("@fastify/swagger")},774:e=>{e.exports=require("@fastify/swagger-ui")},142:e=>{e.exports=require("dotenv")},442:e=>{e.exports=require("fastify")},993:e=>{e.exports=require("mysql2")},496:e=>{e.exports=require("sequelize")}},t={};!function n(r){var o=t[r];if(void 0!==o)return o.exports;var s=t[r]={exports:{}};return e[r].call(s.exports,s,s.exports,n),s.exports}(492)})();