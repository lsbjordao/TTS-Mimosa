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


// Description of Mimosa antrorsa
const Mimosa_antrorsa = new Mimosa()
Mimosa_antrorsa.specificEpithet = 'antrorsa'

Mimosa_antrorsa.stems = new Stems()

Mimosa_antrorsa.stipule = new Stipule()
Mimosa_antrorsa.stipule.margin = new MarginStipule()
Mimosa_antrorsa.stipule.adaxial = new AdaxialStipule()
Mimosa_antrorsa.stipule.abaxial = new AbaxialStipule()

Mimosa_antrorsa.leaf = new Leaf()
Mimosa_antrorsa.leaf.petiole = new Petiole()
Mimosa_antrorsa.leaf.bipinnate = new Bipinnate()
Mimosa_antrorsa.leaf.bipinnate.rachis = new Rachis()
Mimosa_antrorsa.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_antrorsa.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_antrorsa.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(8, 15)
Mimosa_antrorsa.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMax(17)
Mimosa_antrorsa.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_antrorsa.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_antrorsa.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_antrorsa.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(30, 55)
Mimosa_antrorsa.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMax(70)
Mimosa_antrorsa.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_antrorsa.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_antrorsa.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_antrorsa.inflorescence = new Inflorescence()
Mimosa_antrorsa.inflorescence.peduncle = new Peduncle()
Mimosa_antrorsa.inflorescence.capitate = new CapitateInflorescence()

Mimosa_antrorsa.flower = new Flower()
Mimosa_antrorsa.flower.bracteole = new Bracteole()
Mimosa_antrorsa.flower.merism = '4-merous'
Mimosa_antrorsa.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_antrorsa.flower.calyx = new Calyx()
Mimosa_antrorsa.flower.calyx.shape = 'campanulate'
Mimosa_antrorsa.flower.corolla = new Corolla()
Mimosa_antrorsa.flower.corolla.shape = 'funnelform'

Mimosa_antrorsa.androecium = new Androecium()
Mimosa_antrorsa.androecium.filaments = new Filaments()
Mimosa_antrorsa.androecium.filaments.colour = 'pinkish'

Mimosa_antrorsa.ginoecium = new Ginoecium()
Mimosa_antrorsa.ginoecium.ovary = new Ovary()

Mimosa_antrorsa.fruit = new Fruit()
Mimosa_antrorsa.fruit.stipe = new Stipe()
Mimosa_antrorsa.fruit.replum = new Replum()
Mimosa_antrorsa.fruit.epicarp = new Epicarp()

Mimosa_antrorsa.seed = new Seed()


// Description authorship
Mimosa_antrorsa.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_antrorsa.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709349 
})


// Sources


// Export Mimosa antrorsa
export { Mimosa_antrorsa }