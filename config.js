const config = {
    dbUrl: process.env.DB_URL || 'mongodb://db_user_nodejs_course:Facil123@cluster0-shard-00-00.jgenf.mongodb.net:27017,cluster0-shard-00-01.jgenf.mongodb.net:27017,cluster0-shard-00-02.jgenf.mongodb.net:27017/telegrom?ssl=true&replicaSet=atlas-wkgcig-shard-0&authSource=admin&retryWrites=true&w=majority',
    port: process.env.PORT || 3000,
    host: process.env.host || 'http://localhost',
    publicRoute: process.env.PUBLIC_ROUTE || 'app',

}

module.exports = config;