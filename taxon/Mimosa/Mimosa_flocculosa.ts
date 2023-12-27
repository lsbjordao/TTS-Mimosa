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


// Description of Mimosa flocculosa
const Mimosa_flocculosa = new Mimosa()
Mimosa_flocculosa.specificEpithet = 'flocculosa'

Mimosa_flocculosa.stems = new Stems()

Mimosa_flocculosa.stipule = new Stipule()
Mimosa_flocculosa.stipule.margin = new MarginStipule()
Mimosa_flocculosa.stipule.adaxial = new AdaxialStipule()
Mimosa_flocculosa.stipule.abaxial = new AbaxialStipule()

Mimosa_flocculosa.leaf = new Leaf()
Mimosa_flocculosa.leaf.petiole = new Petiole()
Mimosa_flocculosa.leaf.bipinnate = new Bipinnate()
Mimosa_flocculosa.leaf.bipinnate.rachis = new Rachis()
Mimosa_flocculosa.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_flocculosa.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_flocculosa.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_flocculosa.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_flocculosa.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_flocculosa.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_flocculosa.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(14)
Mimosa_flocculosa.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(16, 2)
Mimosa_flocculosa.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMax(21)
Mimosa_flocculosa.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_flocculosa.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_flocculosa.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_flocculosa.inflorescence = new Inflorescence()
Mimosa_flocculosa.inflorescence.peduncle = new Peduncle()
Mimosa_flocculosa.inflorescence.capitate = new CapitateInflorescence()

Mimosa_flocculosa.flower = new Flower()
Mimosa_flocculosa.flower.bracteole = new Bracteole()
Mimosa_flocculosa.flower.merism = '4-merous'
Mimosa_flocculosa.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_flocculosa.flower.calyx = new Calyx()
Mimosa_flocculosa.flower.calyx.shape = 'campanulate'
Mimosa_flocculosa.flower.corolla = new Corolla()
Mimosa_flocculosa.flower.corolla.shape = 'vase-shaped'

Mimosa_flocculosa.androecium = new Androecium()
Mimosa_flocculosa.androecium.filaments = new Filaments()
Mimosa_flocculosa.androecium.filaments.colour = 'pinkish'

Mimosa_flocculosa.ginoecium = new Ginoecium()
Mimosa_flocculosa.ginoecium.ovary = new Ovary()

Mimosa_flocculosa.fruit = new Fruit()
Mimosa_flocculosa.fruit.stipe = new Stipe()
Mimosa_flocculosa.fruit.replum = new Replum()
Mimosa_flocculosa.fruit.epicarp = new Epicarp()

Mimosa_flocculosa.seed = new Seed()


// Description authorship
Mimosa_flocculosa.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_flocculosa.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709351 
})


// Sources


// Export Mimosa flocculosa
export { Mimosa_flocculosa }