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


// Description of Mimosa surumuensis
const Mimosa_surumuensis = new Mimosa()
Mimosa_surumuensis.specificEpithet = 'surumuensis'

Mimosa_surumuensis.stems = new Stems()

Mimosa_surumuensis.stipule = new Stipule()
Mimosa_surumuensis.stipule.margin = new MarginStipule()
Mimosa_surumuensis.stipule.adaxial = new AdaxialStipule()
Mimosa_surumuensis.stipule.abaxial = new AbaxialStipule()

Mimosa_surumuensis.leaf = new Leaf()
Mimosa_surumuensis.leaf.petiole = new Petiole()
Mimosa_surumuensis.leaf.bipinnate = new Bipinnate()
Mimosa_surumuensis.leaf.bipinnate.rachis = new Rachis()
Mimosa_surumuensis.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_surumuensis.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_surumuensis.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(5, 11)
Mimosa_surumuensis.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMax(12)
Mimosa_surumuensis.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_surumuensis.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_surumuensis.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_surumuensis.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_surumuensis.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_surumuensis.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_surumuensis.inflorescence = new Inflorescence()
Mimosa_surumuensis.inflorescence.peduncle = new Peduncle()
Mimosa_surumuensis.inflorescence.capitate = new CapitateInflorescence()

Mimosa_surumuensis.flower = new Flower()
Mimosa_surumuensis.flower.bracteole = new Bracteole()
Mimosa_surumuensis.flower.merism = '4-merous'
Mimosa_surumuensis.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_surumuensis.flower.calyx = new Calyx()
Mimosa_surumuensis.flower.calyx.shape = ['turbinate', 'campanulate']
Mimosa_surumuensis.flower.corolla = new Corolla()
Mimosa_surumuensis.flower.corolla.shape = 'turbinate'

Mimosa_surumuensis.androecium = new Androecium()
Mimosa_surumuensis.androecium.filaments = new Filaments()
Mimosa_surumuensis.androecium.filaments.colour = ['pinkish', 'whitenish']

Mimosa_surumuensis.ginoecium = new Ginoecium()
Mimosa_surumuensis.ginoecium.ovary = new Ovary()

Mimosa_surumuensis.fruit = new Fruit()
Mimosa_surumuensis.fruit.stipe = new Stipe()
Mimosa_surumuensis.fruit.replum = new Replum()
Mimosa_surumuensis.fruit.epicarp = new Epicarp()

Mimosa_surumuensis.seed = new Seed()


// Description authorship
Mimosa_surumuensis.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_surumuensis.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa surumuensis
export { Mimosa_surumuensis }