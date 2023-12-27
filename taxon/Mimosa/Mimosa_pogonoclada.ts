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


// Description of Mimosa pogonoclada
const Mimosa_pogonoclada = new Mimosa()
Mimosa_pogonoclada.specificEpithet = 'pogonoclada'

Mimosa_pogonoclada.stems = new Stems()

Mimosa_pogonoclada.stipule = new Stipule()
Mimosa_pogonoclada.stipule.margin = new MarginStipule()
Mimosa_pogonoclada.stipule.adaxial = new AdaxialStipule()
Mimosa_pogonoclada.stipule.abaxial = new AbaxialStipule()

Mimosa_pogonoclada.leaf = new Leaf()
Mimosa_pogonoclada.leaf.petiole = new Petiole()
Mimosa_pogonoclada.leaf.bipinnate = new Bipinnate()
Mimosa_pogonoclada.leaf.bipinnate.rachis = new Rachis()
Mimosa_pogonoclada.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_pogonoclada.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_pogonoclada.leaf.bipinnate.pinnae.setNumberOfPairs(4)
Mimosa_pogonoclada.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_pogonoclada.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_pogonoclada.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_pogonoclada.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(6, 9)
Mimosa_pogonoclada.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMax(10)
Mimosa_pogonoclada.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_pogonoclada.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_pogonoclada.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_pogonoclada.inflorescence = new Inflorescence()
Mimosa_pogonoclada.inflorescence.peduncle = new Peduncle()
Mimosa_pogonoclada.inflorescence.capitate = new CapitateInflorescence()

Mimosa_pogonoclada.flower = new Flower()
Mimosa_pogonoclada.flower.bracteole = new Bracteole()
Mimosa_pogonoclada.flower.merism = '4-merous'
Mimosa_pogonoclada.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_pogonoclada.flower.calyx = new Calyx()
Mimosa_pogonoclada.flower.calyx.shape = 'paleaceous'
Mimosa_pogonoclada.flower.corolla = new Corolla()
Mimosa_pogonoclada.flower.corolla.shape = 'funnelform'

Mimosa_pogonoclada.androecium = new Androecium()
Mimosa_pogonoclada.androecium.filaments = new Filaments()

Mimosa_pogonoclada.ginoecium = new Ginoecium()
Mimosa_pogonoclada.ginoecium.ovary = new Ovary()

Mimosa_pogonoclada.fruit = new Fruit()
Mimosa_pogonoclada.fruit.stipe = new Stipe()
Mimosa_pogonoclada.fruit.replum = new Replum()
Mimosa_pogonoclada.fruit.epicarp = new Epicarp()

Mimosa_pogonoclada.seed = new Seed()


// Description authorship
Mimosa_pogonoclada.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_pogonoclada.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa pogonoclada
export { Mimosa_pogonoclada }