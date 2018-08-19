/*Screep Auto Generation*/
var autoGenerate = {
        /*Harvester Auto Generation */
    run: function() {
            var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    
            if(harvesters.length < 2) {
                var newName = Game.spawns.spawnBase.createCreep([WORK,CARRY,CARRY,MOVE], undefined, {role: 'harvester'});
                console.log('Spawning new harvester: ' + newName);
            }

        /*Upgrader Auto Generation */

            var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
    
            if(upgraders.length < 2) {
                var newName = Game.spawns.spawnBase.createCreep([WORK,WORK,CARRY,CARRY,MOVE,MOVE], undefined, {role: 'upgrader'});
                console.log('Spawning new upgrader: ' + newName);
            }    
        /*Builder Auto Generation */

            var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
    
            if(builders.length < 1) {
                var newName = Game.spawns.spawnBase.createCreep([WORK,WORK,CARRY,CARRY,MOVE,MOVE], undefined, {role: 'builder'});
                console.log('Spawning new builder: ' + newName);
            }    
        /*Repairer Auto Generation */

            var repairers = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairer');
    
            if(repairers.length < 1) {
                var newName = Game.spawns.spawnBase.createCreep([WORK,WORK,CARRY,CARRY,MOVE,MOVE], undefined, {role: 'repairer'});
                console.log('Spawning new builder: ' + newName);
            }
    }
}

module.exports = autoGenerate