var orm = require("../config/orm.js");

var burger = {
	selectAll: function(cb){
		orm.selectAll("burgers", function(res){
			cb(res);
		});
	},

	insertOne: function(cols, vals, cb){
		orm.insertOne("burgers", cols, vals, function(res){
			cb(res);
		});
	},

	updateOne: function(col, newValue, condition, cb){
		orm.updateOne("burgers", col, newValue, condition, function(res){
			cb(res);
		});
	}
};

module.exports = burger;