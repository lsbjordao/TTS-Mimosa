// Import genus Mimosa
import { Mimosa } from '.'

// Import characters
import { 
    Stems, 
    Trichomes,
    Prickles,
    Stipule, 
    Leaf, 
    Inflorescence, 
    Flower,
    Androecium,
    Ginoecium,
    Fruit
} from '../../characters/v1'
import { Bipinnate, Petiole } from '../../characters/v1/Leaf'
import { Rachis, Pinnae } from '../../characters/v1/Leaf/Bipinnate'
import { Spicule } from '../../characters/v1/Leaf/Bipinnate/Rachis/Spicule'
import { Rachilla, Leaflet, Paraphillidia } from '../../characters/v1/Leaf/Bipinnate/Pinnae'
import {
    AdaxialLeaflet, 
    AbaxialLeaflet, 
    MarginLeaflet
} from '../../characters/v1/Leaf/Bipinnate/Pinnae/Leaflet'
import { AdaxialStipule, AbaxialStipule, MarginStipule } from '../../characters/v1/Stipule'
import { Peduncle, CapitateInflorescence } from '../../characters/v1/Inflorescence'
import { Calyx, Corolla, Bracteole } from '../../characters/v1/Flower'
import { Stipe, Epicarp, Replum } from '../../characters/v1/Fruit'
import { Filaments } from '../../characters/v1/Androecium'
import { Ovary } from '../../characters/v1/Ginoecium'
import { Seed } from '../../characters/v1/Seed'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'


// Description of Mimosa barnebiana
const Mimosa_barnebiana = new Mimosa()
Mimosa_barnebiana.specificEpithet = 'barnebiana'

Mimosa_barnebiana.stems = new Stems()

Mimosa_barnebiana.stipule = new Stipule()
Mimosa_barnebiana.stipule.margin = new MarginStipule()
Mimosa_barnebiana.stipule.adaxial = new AdaxialStipule()
Mimosa_barnebiana.stipule.abaxial = new AbaxialStipule()

Mimosa_barnebiana.leaf = new Leaf()
Mimosa_barnebiana.leaf.petiole = new Petiole()
Mimosa_barnebiana.leaf.bipinnate = new Bipinnate()
Mimosa_barnebiana.leaf.bipinnate.rachis = new Rachis()
Mimosa_barnebiana.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_barnebiana.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_barnebiana.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_barnebiana.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_barnebiana.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_barnebiana.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_barnebiana.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_barnebiana.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_barnebiana.inflorescence = new Inflorescence()
Mimosa_barnebiana.inflorescence.peduncle = new Peduncle()
Mimosa_barnebiana.inflorescence.capitate = new CapitateInflorescence()

Mimosa_barnebiana.flower = new Flower()
Mimosa_barnebiana.flower.bracteole = new Bracteole()
Mimosa_barnebiana.flower.merism = '4-merous'
Mimosa_barnebiana.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_barnebiana.flower.calyx = new Calyx()
Mimosa_barnebiana.flower.corolla = new Corolla()

Mimosa_barnebiana.androecium = new Androecium()
Mimosa_barnebiana.androecium.filaments = new Filaments()

Mimosa_barnebiana.ginoecium = new Ginoecium()
Mimosa_barnebiana.ginoecium.ovary = new Ovary()

Mimosa_barnebiana.fruit = new Fruit()
Mimosa_barnebiana.fruit.stipe = new Stipe()
Mimosa_barnebiana.fruit.replum = new Replum()
Mimosa_barnebiana.fruit.epicarp = new Epicarp()

Mimosa_barnebiana.seed = new Seed()


// Description authorship
Mimosa_barnebiana.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_barnebiana.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709349 
})


// Sources


// Export Mimosa barnebiana
export { Mimosa_barnebiana }