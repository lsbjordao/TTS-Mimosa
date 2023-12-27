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


// Description of Mimosa venatorum
const Mimosa_venatorum = new Mimosa()
Mimosa_venatorum.specificEpithet = 'venatorum'

Mimosa_venatorum.stems = new Stems()

Mimosa_venatorum.stipule = new Stipule()
Mimosa_venatorum.stipule.margin = new MarginStipule()
Mimosa_venatorum.stipule.adaxial = new AdaxialStipule()
Mimosa_venatorum.stipule.abaxial = new AbaxialStipule()

Mimosa_venatorum.leaf = new Leaf()
Mimosa_venatorum.leaf.petiole = new Petiole()
Mimosa_venatorum.leaf.bipinnate = new Bipinnate()
Mimosa_venatorum.leaf.bipinnate.rachis = new Rachis()
Mimosa_venatorum.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_venatorum.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_venatorum.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_venatorum.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_venatorum.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_venatorum.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_venatorum.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_venatorum.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_venatorum.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_venatorum.inflorescence = new Inflorescence()
Mimosa_venatorum.inflorescence.peduncle = new Peduncle()
Mimosa_venatorum.inflorescence.capitate = new CapitateInflorescence()

Mimosa_venatorum.flower = new Flower()
Mimosa_venatorum.flower.bracteole = new Bracteole()
Mimosa_venatorum.flower.merism = '4-merous'
Mimosa_venatorum.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_venatorum.flower.calyx = new Calyx()
Mimosa_venatorum.flower.calyx.shape = 'paleaceous'
Mimosa_venatorum.flower.corolla = new Corolla()
Mimosa_venatorum.flower.corolla.shape = 'funnelform'

Mimosa_venatorum.androecium = new Androecium()
Mimosa_venatorum.androecium.filaments = new Filaments()
Mimosa_venatorum.androecium.filaments.colour = ['pinkish', 'whitenish']

Mimosa_venatorum.ginoecium = new Ginoecium()
Mimosa_venatorum.ginoecium.ovary = new Ovary()

Mimosa_venatorum.fruit = new Fruit()
Mimosa_venatorum.fruit.stipe = new Stipe()
Mimosa_venatorum.fruit.replum = new Replum()
Mimosa_venatorum.fruit.epicarp = new Epicarp()

Mimosa_venatorum.seed = new Seed()


// Description authorship
Mimosa_venatorum.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_venatorum.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa venatorum
export { Mimosa_venatorum }