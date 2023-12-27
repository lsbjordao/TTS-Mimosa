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


// Description of Mimosa weddelliana
const Mimosa_weddelliana = new Mimosa()
Mimosa_weddelliana.specificEpithet = 'weddelliana'

Mimosa_weddelliana.stems = new Stems()

Mimosa_weddelliana.stipule = new Stipule()
Mimosa_weddelliana.stipule.margin = new MarginStipule()
Mimosa_weddelliana.stipule.adaxial = new AdaxialStipule()
Mimosa_weddelliana.stipule.abaxial = new AbaxialStipule()

Mimosa_weddelliana.leaf = new Leaf()
Mimosa_weddelliana.leaf.petiole = new Petiole()
Mimosa_weddelliana.leaf.bipinnate = new Bipinnate()
Mimosa_weddelliana.leaf.bipinnate.rachis = new Rachis()
Mimosa_weddelliana.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_weddelliana.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_weddelliana.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_weddelliana.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_weddelliana.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_weddelliana.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_weddelliana.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_weddelliana.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_weddelliana.inflorescence = new Inflorescence()
Mimosa_weddelliana.inflorescence.peduncle = new Peduncle()
Mimosa_weddelliana.inflorescence.capitate = new CapitateInflorescence()

Mimosa_weddelliana.flower = new Flower()
Mimosa_weddelliana.flower.bracteole = new Bracteole()
Mimosa_weddelliana.flower.merism = '4-merous'
Mimosa_weddelliana.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_weddelliana.flower.calyx = new Calyx()
Mimosa_weddelliana.flower.corolla = new Corolla()
Mimosa_weddelliana.flower.corolla.shape = 'vase-shaped'

Mimosa_weddelliana.androecium = new Androecium()
Mimosa_weddelliana.androecium.filaments = new Filaments()
Mimosa_weddelliana.androecium.filaments.colour = ['pinkish', 'whitenish']

Mimosa_weddelliana.ginoecium = new Ginoecium()
Mimosa_weddelliana.ginoecium.ovary = new Ovary()

Mimosa_weddelliana.fruit = new Fruit()
Mimosa_weddelliana.fruit.stipe = new Stipe()
Mimosa_weddelliana.fruit.replum = new Replum()
Mimosa_weddelliana.fruit.epicarp = new Epicarp()

Mimosa_weddelliana.seed = new Seed()


// Description authorship
Mimosa_weddelliana.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_weddelliana.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa weddelliana
export { Mimosa_weddelliana }