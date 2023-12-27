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


// Description of Mimosa quitensis
const Mimosa_quitensis = new Mimosa()
Mimosa_quitensis.specificEpithet = 'quitensis'

Mimosa_quitensis.stems = new Stems()

Mimosa_quitensis.stipule = new Stipule()
Mimosa_quitensis.stipule.margin = new MarginStipule()
Mimosa_quitensis.stipule.adaxial = new AdaxialStipule()
Mimosa_quitensis.stipule.abaxial = new AbaxialStipule()

Mimosa_quitensis.leaf = new Leaf()
Mimosa_quitensis.leaf.petiole = new Petiole()
Mimosa_quitensis.leaf.bipinnate = new Bipinnate()
Mimosa_quitensis.leaf.bipinnate.rachis = new Rachis()
Mimosa_quitensis.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_quitensis.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_quitensis.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMin(5)
Mimosa_quitensis.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(6, 12)
Mimosa_quitensis.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMax(13)
Mimosa_quitensis.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_quitensis.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_quitensis.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_quitensis.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_quitensis.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_quitensis.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_quitensis.inflorescence = new Inflorescence()
Mimosa_quitensis.inflorescence.peduncle = new Peduncle()
Mimosa_quitensis.inflorescence.capitate = new CapitateInflorescence()

Mimosa_quitensis.flower = new Flower()
Mimosa_quitensis.flower.bracteole = new Bracteole()
Mimosa_quitensis.flower.merism = '5-merous'
Mimosa_quitensis.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_quitensis.flower.calyx = new Calyx()
Mimosa_quitensis.flower.calyx.shape = 'campanulate'
Mimosa_quitensis.flower.corolla = new Corolla()
Mimosa_quitensis.flower.corolla.shape = 'vase-shaped'

Mimosa_quitensis.androecium = new Androecium()
Mimosa_quitensis.androecium.filaments = new Filaments()
Mimosa_quitensis.androecium.filaments.colour = ['whitenish', 'creamish']

Mimosa_quitensis.ginoecium = new Ginoecium()
Mimosa_quitensis.ginoecium.ovary = new Ovary()

Mimosa_quitensis.fruit = new Fruit()
Mimosa_quitensis.fruit.stipe = new Stipe()
Mimosa_quitensis.fruit.replum = new Replum()
Mimosa_quitensis.fruit.epicarp = new Epicarp()

Mimosa_quitensis.seed = new Seed()


// Description authorship
Mimosa_quitensis.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_quitensis.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa quitensis
export { Mimosa_quitensis }