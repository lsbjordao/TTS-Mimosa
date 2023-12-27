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


// Description of Mimosa incarum
const Mimosa_incarum = new Mimosa()
Mimosa_incarum.specificEpithet = 'incarum'

Mimosa_incarum.stems = new Stems()

Mimosa_incarum.stipule = new Stipule()
Mimosa_incarum.stipule.margin = new MarginStipule()
Mimosa_incarum.stipule.adaxial = new AdaxialStipule()
Mimosa_incarum.stipule.abaxial = new AbaxialStipule()

Mimosa_incarum.leaf = new Leaf()
Mimosa_incarum.leaf.petiole = new Petiole()
Mimosa_incarum.leaf.bipinnate = new Bipinnate()
Mimosa_incarum.leaf.bipinnate.rachis = new Rachis()
Mimosa_incarum.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_incarum.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_incarum.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_incarum.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_incarum.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_incarum.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_incarum.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_incarum.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_incarum.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_incarum.inflorescence = new Inflorescence()
Mimosa_incarum.inflorescence.peduncle = new Peduncle()
Mimosa_incarum.inflorescence.capitate = new CapitateInflorescence()

Mimosa_incarum.flower = new Flower()
Mimosa_incarum.flower.bracteole = new Bracteole()
Mimosa_incarum.flower.merism = '4-merous'
Mimosa_incarum.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_incarum.flower.calyx = new Calyx()
Mimosa_incarum.flower.corolla = new Corolla()
Mimosa_incarum.flower.corolla.shape = ['turbinate', 'funnelform']

Mimosa_incarum.androecium = new Androecium()
Mimosa_incarum.androecium.filaments = new Filaments()
Mimosa_incarum.androecium.filaments.colour = 'pinkish'

Mimosa_incarum.ginoecium = new Ginoecium()
Mimosa_incarum.ginoecium.ovary = new Ovary()

Mimosa_incarum.fruit = new Fruit()
Mimosa_incarum.fruit.stipe = new Stipe()
Mimosa_incarum.fruit.replum = new Replum()
Mimosa_incarum.fruit.epicarp = new Epicarp()

Mimosa_incarum.seed = new Seed()


// Description authorship
Mimosa_incarum.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_incarum.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa incarum
export { Mimosa_incarum }