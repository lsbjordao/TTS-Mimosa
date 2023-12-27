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


// Description of Mimosa oedoclada
const Mimosa_oedoclada = new Mimosa()
Mimosa_oedoclada.specificEpithet = 'oedoclada'

Mimosa_oedoclada.stems = new Stems()

Mimosa_oedoclada.stipule = new Stipule()
Mimosa_oedoclada.stipule.margin = new MarginStipule()
Mimosa_oedoclada.stipule.adaxial = new AdaxialStipule()
Mimosa_oedoclada.stipule.abaxial = new AbaxialStipule()

Mimosa_oedoclada.leaf = new Leaf()
Mimosa_oedoclada.leaf.petiole = new Petiole()
Mimosa_oedoclada.leaf.bipinnate = new Bipinnate()
Mimosa_oedoclada.leaf.bipinnate.rachis = new Rachis()
Mimosa_oedoclada.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_oedoclada.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_oedoclada.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(8, 15)
Mimosa_oedoclada.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_oedoclada.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_oedoclada.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_oedoclada.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(6)
Mimosa_oedoclada.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(7, 12)
Mimosa_oedoclada.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMax(13)
Mimosa_oedoclada.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_oedoclada.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_oedoclada.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_oedoclada.inflorescence = new Inflorescence()
Mimosa_oedoclada.inflorescence.peduncle = new Peduncle()
Mimosa_oedoclada.inflorescence.capitate = new CapitateInflorescence()

Mimosa_oedoclada.flower = new Flower()
Mimosa_oedoclada.flower.bracteole = new Bracteole()
Mimosa_oedoclada.flower.merism = '4-merous'
Mimosa_oedoclada.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_oedoclada.flower.calyx = new Calyx()
Mimosa_oedoclada.flower.calyx.shape = 'campanulate'
Mimosa_oedoclada.flower.corolla = new Corolla()
Mimosa_oedoclada.flower.corolla.shape = 'funnelform'

Mimosa_oedoclada.androecium = new Androecium()
Mimosa_oedoclada.androecium.filaments = new Filaments()
Mimosa_oedoclada.androecium.filaments.colour = 'pinkish'

Mimosa_oedoclada.ginoecium = new Ginoecium()
Mimosa_oedoclada.ginoecium.ovary = new Ovary()

Mimosa_oedoclada.fruit = new Fruit()
Mimosa_oedoclada.fruit.stipe = new Stipe()
Mimosa_oedoclada.fruit.replum = new Replum()
Mimosa_oedoclada.fruit.epicarp = new Epicarp()

Mimosa_oedoclada.seed = new Seed()


// Description authorship
Mimosa_oedoclada.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_oedoclada.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa oedoclada
export { Mimosa_oedoclada }