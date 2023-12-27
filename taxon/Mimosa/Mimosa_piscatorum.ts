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


// Description of Mimosa piscatorum
const Mimosa_piscatorum = new Mimosa()
Mimosa_piscatorum.specificEpithet = 'piscatorum'

Mimosa_piscatorum.stems = new Stems()

Mimosa_piscatorum.stipule = new Stipule()
Mimosa_piscatorum.stipule.margin = new MarginStipule()
Mimosa_piscatorum.stipule.adaxial = new AdaxialStipule()
Mimosa_piscatorum.stipule.abaxial = new AbaxialStipule()

Mimosa_piscatorum.leaf = new Leaf()
Mimosa_piscatorum.leaf.petiole = new Petiole()
Mimosa_piscatorum.leaf.bipinnate = new Bipinnate()
Mimosa_piscatorum.leaf.bipinnate.rachis = new Rachis()
Mimosa_piscatorum.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_piscatorum.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_piscatorum.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_piscatorum.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_piscatorum.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_piscatorum.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_piscatorum.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(3, 6)
Mimosa_piscatorum.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMax(8)
Mimosa_piscatorum.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_piscatorum.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_piscatorum.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_piscatorum.inflorescence = new Inflorescence()
Mimosa_piscatorum.inflorescence.peduncle = new Peduncle()
Mimosa_piscatorum.inflorescence.capitate = new CapitateInflorescence()

Mimosa_piscatorum.flower = new Flower()
Mimosa_piscatorum.flower.bracteole = new Bracteole()
Mimosa_piscatorum.flower.merism = '3-merous'
Mimosa_piscatorum.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_piscatorum.flower.calyx = new Calyx()
Mimosa_piscatorum.flower.calyx.shape = ['turbinate', 'campanulate']
Mimosa_piscatorum.flower.corolla = new Corolla()
Mimosa_piscatorum.flower.corolla.shape = 'turbinate'

Mimosa_piscatorum.androecium = new Androecium()
Mimosa_piscatorum.androecium.filaments = new Filaments()

Mimosa_piscatorum.ginoecium = new Ginoecium()
Mimosa_piscatorum.ginoecium.ovary = new Ovary()

Mimosa_piscatorum.fruit = new Fruit()
Mimosa_piscatorum.fruit.stipe = new Stipe()
Mimosa_piscatorum.fruit.replum = new Replum()
Mimosa_piscatorum.fruit.epicarp = new Epicarp()

Mimosa_piscatorum.seed = new Seed()


// Description authorship
Mimosa_piscatorum.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_piscatorum.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa piscatorum
export { Mimosa_piscatorum }