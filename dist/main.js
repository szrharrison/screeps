var roleHarvester = require("dist/role.harvester");
var roleUpgrader = require("dist/role.upgrader");
var roleBuilder = require("dist/role.builder");
var roleRepairer = require("dist/role.repairer");
var autoGenerate = require("dist/generator.creeps");

module.exports.loop = function () {

  // Always place this memory cleaning code at the very top of your main loop!

  var name;
  for (name in Memory.creeps) {
    if (!Game.creeps[name]) {
      delete Memory.creeps[name];
      console.log("Clearing non-existing creep memory:", name);
    }
  }

  autoGenerate.run();

  /*Screep Role Programs */
  for (name in Game.creeps) {
    var creep = Game.creeps[name];
    if (creep.memory.role == "harvester") {
      roleHarvester.run(creep);
    }
    if (creep.memory.role == "upgrader") {
      roleUpgrader.run(creep);
    }
    if (creep.memory.role == "builder") {
      roleBuilder.run(creep);
    }
    if (creep.memory.role == "repairer") {
      roleRepairer.run(creep);
    }
  }
};