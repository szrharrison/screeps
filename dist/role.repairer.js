var roleRepairer = {

    /** @param {Creep} creep **/
    run: function(creep) {
	    if(creep.carry.energy < creep.carryCapacity) {
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0]);
            }
        }
        else {
            var targets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.hits > structure.hitsMax / 2);
                    }
            });
            if(targets.length > 0) {
                creep.moveTo(targets[0]);
                creep.repair(targets[0]);

            } else {

            // nothing to repair, let's do something else?

            }
        }
    }
};

module.exports = roleRepairer;