module.exports = {
  apps : [{
    name      	: "IConnectAPP",	  
    script    	: "connectapi_v1.js",
    instances 	: "1",
    exec_mode 	: "cluster",
    watch	: [
	    "/opt/pm2daemon/CogencisConnectAPI",
            "/opt/pm2daemon/CogencisConnectAPI/config",
    ],
  }]
}
