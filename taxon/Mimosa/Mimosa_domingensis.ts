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


// Description of Mimosa domingensis
const Mimosa_domingensis = new Mimosa()
Mimosa_domingensis.specificEpithet = 'domingensis'

Mimosa_domingensis.stems = new Stems()

Mimosa_domingensis.stipule = new Stipule()
Mimosa_domingensis.stipule.margin = new MarginStipule()
Mimosa_domingensis.stipule.adaxial = new AdaxialStipule()
Mimosa_domingensis.stipule.abaxial = new AbaxialStipule()

Mimosa_domingensis.leaf = new Leaf()
Mimosa_domingensis.leaf.petiole = new Petiole()
Mimosa_domingensis.leaf.bipinnate = new Bipinnate()
Mimosa_domingensis.leaf.bipinnate.rachis = new Rachis()
Mimosa_domingensis.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_domingensis.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_domingensis.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(5, 10)
Mimosa_domingensis.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMax(11)
Mimosa_domingensis.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_domingensis.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_domingensis.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_domingensis.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(3, 6)
Mimosa_domingensis.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMax(7)
Mimosa_domingensis.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_domingensis.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_domingensis.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_domingensis.inflorescence = new Inflorescence()
Mimosa_domingensis.inflorescence.peduncle = new Peduncle()
Mimosa_domingensis.inflorescence.capitate = new CapitateInflorescence()

Mimosa_domingensis.flower = new Flower()
Mimosa_domingensis.flower.bracteole = new Bracteole()
Mimosa_domingensis.flower.merism = ['4-merous', '5-merous']
Mimosa_domingensis.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_domingensis.flower.calyx = new Calyx()
Mimosa_domingensis.flower.calyx.shape = 'campanulate'
Mimosa_domingensis.flower.corolla = new Corolla()
Mimosa_domingensis.flower.corolla.shape = 'vase-shaped'

Mimosa_domingensis.androecium = new Androecium()
Mimosa_domingensis.androecium.filaments = new Filaments()

Mimosa_domingensis.ginoecium = new Ginoecium()
Mimosa_domingensis.ginoecium.ovary = new Ovary()

Mimosa_domingensis.fruit = new Fruit()
Mimosa_domingensis.fruit.stipe = new Stipe()
Mimosa_domingensis.fruit.replum = new Replum()
Mimosa_domingensis.fruit.epicarp = new Epicarp()

Mimosa_domingensis.seed = new Seed()


// Description authorship
Mimosa_domingensis.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_domingensis.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa domingensis
export { Mimosa_domingensis }