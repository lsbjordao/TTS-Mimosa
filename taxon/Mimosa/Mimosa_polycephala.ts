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


// Description of Mimosa polycephala
const Mimosa_polycephala = new Mimosa()
Mimosa_polycephala.specificEpithet = 'polycephala'

Mimosa_polycephala.stems = new Stems()

Mimosa_polycephala.stipule = new Stipule()
Mimosa_polycephala.stipule.margin = new MarginStipule()
Mimosa_polycephala.stipule.adaxial = new AdaxialStipule()
Mimosa_polycephala.stipule.abaxial = new AbaxialStipule()

Mimosa_polycephala.leaf = new Leaf()
Mimosa_polycephala.leaf.petiole = new Petiole()
Mimosa_polycephala.leaf.bipinnate = new Bipinnate()
Mimosa_polycephala.leaf.bipinnate.rachis = new Rachis()
Mimosa_polycephala.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_polycephala.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_polycephala.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_polycephala.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_polycephala.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_polycephala.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_polycephala.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_polycephala.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_polycephala.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_polycephala.inflorescence = new Inflorescence()
Mimosa_polycephala.inflorescence.peduncle = new Peduncle()
Mimosa_polycephala.inflorescence.capitate = new CapitateInflorescence()

Mimosa_polycephala.flower = new Flower()
Mimosa_polycephala.flower.bracteole = new Bracteole()
Mimosa_polycephala.flower.merism = '4-merous'
Mimosa_polycephala.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_polycephala.flower.calyx = new Calyx()
Mimosa_polycephala.flower.calyx.shape = 'paleaceous'
Mimosa_polycephala.flower.corolla = new Corolla()
Mimosa_polycephala.flower.corolla.shape = 'funnelform'

Mimosa_polycephala.androecium = new Androecium()
Mimosa_polycephala.androecium.filaments = new Filaments()
Mimosa_polycephala.androecium.filaments.colour = ['pinkish', 'whitenish']

Mimosa_polycephala.ginoecium = new Ginoecium()
Mimosa_polycephala.ginoecium.ovary = new Ovary()

Mimosa_polycephala.fruit = new Fruit()
Mimosa_polycephala.fruit.stipe = new Stipe()
Mimosa_polycephala.fruit.replum = new Replum()
Mimosa_polycephala.fruit.epicarp = new Epicarp()

Mimosa_polycephala.seed = new Seed()


// Description authorship
Mimosa_polycephala.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_polycephala.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709351 
})


// Sources


// Export Mimosa polycephala
export { Mimosa_polycephala }