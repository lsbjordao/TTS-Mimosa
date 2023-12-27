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


// Description of Mimosa inamoena
const Mimosa_inamoena = new Mimosa()
Mimosa_inamoena.specificEpithet = 'inamoena'

Mimosa_inamoena.stems = new Stems()

Mimosa_inamoena.stipule = new Stipule()
Mimosa_inamoena.stipule.margin = new MarginStipule()
Mimosa_inamoena.stipule.adaxial = new AdaxialStipule()
Mimosa_inamoena.stipule.abaxial = new AbaxialStipule()

Mimosa_inamoena.leaf = new Leaf()
Mimosa_inamoena.leaf.petiole = new Petiole()
Mimosa_inamoena.leaf.bipinnate = new Bipinnate()
Mimosa_inamoena.leaf.bipinnate.rachis = new Rachis()
Mimosa_inamoena.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_inamoena.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_inamoena.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(6, 9)
Mimosa_inamoena.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMax(10)
Mimosa_inamoena.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_inamoena.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_inamoena.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_inamoena.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(22, 30)
Mimosa_inamoena.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_inamoena.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_inamoena.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_inamoena.inflorescence = new Inflorescence()
Mimosa_inamoena.inflorescence.peduncle = new Peduncle()
Mimosa_inamoena.inflorescence.capitate = new CapitateInflorescence()

Mimosa_inamoena.flower = new Flower()
Mimosa_inamoena.flower.bracteole = new Bracteole()
Mimosa_inamoena.flower.merism = '4-merous'
Mimosa_inamoena.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_inamoena.flower.calyx = new Calyx()
Mimosa_inamoena.flower.calyx.shape = 'campanulate'
Mimosa_inamoena.flower.corolla = new Corolla()
Mimosa_inamoena.flower.corolla.shape = 'turbinate'

Mimosa_inamoena.androecium = new Androecium()
Mimosa_inamoena.androecium.filaments = new Filaments()
Mimosa_inamoena.androecium.filaments.colour = 'pinkish'

Mimosa_inamoena.ginoecium = new Ginoecium()
Mimosa_inamoena.ginoecium.ovary = new Ovary()

Mimosa_inamoena.fruit = new Fruit()
Mimosa_inamoena.fruit.stipe = new Stipe()
Mimosa_inamoena.fruit.replum = new Replum()
Mimosa_inamoena.fruit.epicarp = new Epicarp()

Mimosa_inamoena.seed = new Seed()


// Description authorship
Mimosa_inamoena.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_inamoena.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa inamoena
export { Mimosa_inamoena }