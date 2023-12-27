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


// Description of Mimosa pilulifera
const Mimosa_pilulifera = new Mimosa()
Mimosa_pilulifera.specificEpithet = 'pilulifera'

Mimosa_pilulifera.stems = new Stems()

Mimosa_pilulifera.stipule = new Stipule()
Mimosa_pilulifera.stipule.margin = new MarginStipule()
Mimosa_pilulifera.stipule.adaxial = new AdaxialStipule()
Mimosa_pilulifera.stipule.abaxial = new AbaxialStipule()

Mimosa_pilulifera.leaf = new Leaf()
Mimosa_pilulifera.leaf.petiole = new Petiole()
Mimosa_pilulifera.leaf.bipinnate = new Bipinnate()
Mimosa_pilulifera.leaf.bipinnate.rachis = new Rachis()
Mimosa_pilulifera.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_pilulifera.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_pilulifera.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_pilulifera.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_pilulifera.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_pilulifera.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_pilulifera.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(5, 22)
Mimosa_pilulifera.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMax(24)
Mimosa_pilulifera.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_pilulifera.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_pilulifera.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_pilulifera.inflorescence = new Inflorescence()
Mimosa_pilulifera.inflorescence.peduncle = new Peduncle()
Mimosa_pilulifera.inflorescence.capitate = new CapitateInflorescence()

Mimosa_pilulifera.flower = new Flower()
Mimosa_pilulifera.flower.bracteole = new Bracteole()
Mimosa_pilulifera.flower.merism = '4-merous'
Mimosa_pilulifera.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_pilulifera.flower.calyx = new Calyx()
Mimosa_pilulifera.flower.calyx.shape = 'campanulate'
Mimosa_pilulifera.flower.corolla = new Corolla()
Mimosa_pilulifera.flower.corolla.shape = ['turbinate', 'obovoid']

Mimosa_pilulifera.androecium = new Androecium()
Mimosa_pilulifera.androecium.filaments = new Filaments()
Mimosa_pilulifera.androecium.filaments.colour = 'yellowish'

Mimosa_pilulifera.ginoecium = new Ginoecium()
Mimosa_pilulifera.ginoecium.ovary = new Ovary()

Mimosa_pilulifera.fruit = new Fruit()
Mimosa_pilulifera.fruit.stipe = new Stipe()
Mimosa_pilulifera.fruit.replum = new Replum()
Mimosa_pilulifera.fruit.epicarp = new Epicarp()

Mimosa_pilulifera.seed = new Seed()


// Description authorship
Mimosa_pilulifera.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_pilulifera.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa pilulifera
export { Mimosa_pilulifera }