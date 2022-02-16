class tree {
    constructor(species) {
        this.species = species;
    }
}
definition() {
    return 'A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves.'
}

class deciduous {
    constructor(species, name) {
        this.species = species;
        super(name);
    }
    definition() {
        return 'Deciduous trees shed their leaves annually.'
    }
}

class evergreen {
    constructor(species, name) {
        super(species);
        this.name = name;
    }
    definition() {
        return 'Evergreens keep their leaves all year round.'
    }
}