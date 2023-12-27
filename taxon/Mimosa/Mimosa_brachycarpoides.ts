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


// Description of Mimosa brachycarpoides
const Mimosa_brachycarpoides = new Mimosa()
Mimosa_brachycarpoides.specificEpithet = 'brachycarpoides'

Mimosa_brachycarpoides.stems = new Stems()

Mimosa_brachycarpoides.stipule = new Stipule()
Mimosa_brachycarpoides.stipule.margin = new MarginStipule()
Mimosa_brachycarpoides.stipule.adaxial = new AdaxialStipule()
Mimosa_brachycarpoides.stipule.abaxial = new AbaxialStipule()

Mimosa_brachycarpoides.leaf = new Leaf()
Mimosa_brachycarpoides.leaf.petiole = new Petiole()
Mimosa_brachycarpoides.leaf.bipinnate = new Bipinnate()
Mimosa_brachycarpoides.leaf.bipinnate.rachis = new Rachis()
Mimosa_brachycarpoides.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_brachycarpoides.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_brachycarpoides.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(2, 4)
Mimosa_brachycarpoides.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_brachycarpoides.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_brachycarpoides.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_brachycarpoides.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_brachycarpoides.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_brachycarpoides.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_brachycarpoides.inflorescence = new Inflorescence()
Mimosa_brachycarpoides.inflorescence.peduncle = new Peduncle()
Mimosa_brachycarpoides.inflorescence.capitate = new CapitateInflorescence()

Mimosa_brachycarpoides.flower = new Flower()
Mimosa_brachycarpoides.flower.bracteole = new Bracteole()
Mimosa_brachycarpoides.flower.merism = '4-merous'
Mimosa_brachycarpoides.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_brachycarpoides.flower.calyx = new Calyx()
Mimosa_brachycarpoides.flower.calyx.shape = 'campanulate'
Mimosa_brachycarpoides.flower.corolla = new Corolla()
Mimosa_brachycarpoides.flower.corolla.shape = 'campanulate'

Mimosa_brachycarpoides.androecium = new Androecium()
Mimosa_brachycarpoides.androecium.filaments = new Filaments()

Mimosa_brachycarpoides.ginoecium = new Ginoecium()
Mimosa_brachycarpoides.ginoecium.ovary = new Ovary()

Mimosa_brachycarpoides.fruit = new Fruit()
Mimosa_brachycarpoides.fruit.stipe = new Stipe()
Mimosa_brachycarpoides.fruit.replum = new Replum()
Mimosa_brachycarpoides.fruit.epicarp = new Epicarp()

Mimosa_brachycarpoides.seed = new Seed()


// Description authorship
Mimosa_brachycarpoides.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_brachycarpoides.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa brachycarpoides
export { Mimosa_brachycarpoides }