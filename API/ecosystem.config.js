module.exports = {
  apps : [{
    name      	: "IDataAPP",	  
    script    	: "dataApi_v1.js",
    instances 	: "1",
    exec_mode 	: "cluster",
    watch	: [
	    "/opt/pm2daemon/DataAPIWebpack",
	    "/opt/pm2daemon/DataAPIWebpack/config",
    ],
  }]
}
