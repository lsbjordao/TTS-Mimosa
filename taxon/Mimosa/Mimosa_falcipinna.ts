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


// Description of Mimosa falcipinna
const Mimosa_falcipinna = new Mimosa()
Mimosa_falcipinna.specificEpithet = 'falcipinna'

Mimosa_falcipinna.stems = new Stems()

Mimosa_falcipinna.stipule = new Stipule()
Mimosa_falcipinna.stipule.margin = new MarginStipule()
Mimosa_falcipinna.stipule.adaxial = new AdaxialStipule()
Mimosa_falcipinna.stipule.abaxial = new AbaxialStipule()

Mimosa_falcipinna.leaf = new Leaf()
Mimosa_falcipinna.leaf.petiole = new Petiole()
Mimosa_falcipinna.leaf.bipinnate = new Bipinnate()
Mimosa_falcipinna.leaf.bipinnate.rachis = new Rachis()
Mimosa_falcipinna.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_falcipinna.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_falcipinna.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_falcipinna.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_falcipinna.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_falcipinna.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_falcipinna.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(9, 16)
Mimosa_falcipinna.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMax(17)
Mimosa_falcipinna.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_falcipinna.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_falcipinna.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_falcipinna.inflorescence = new Inflorescence()
Mimosa_falcipinna.inflorescence.peduncle = new Peduncle()
Mimosa_falcipinna.inflorescence.capitate = new CapitateInflorescence()

Mimosa_falcipinna.flower = new Flower()
Mimosa_falcipinna.flower.bracteole = new Bracteole()
Mimosa_falcipinna.flower.merism = '4-merous'
Mimosa_falcipinna.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_falcipinna.flower.calyx = new Calyx()
Mimosa_falcipinna.flower.calyx.shape = 'collar'
Mimosa_falcipinna.flower.corolla = new Corolla()
Mimosa_falcipinna.flower.corolla.shape = 'vase-shaped'

Mimosa_falcipinna.androecium = new Androecium()
Mimosa_falcipinna.androecium.filaments = new Filaments()
Mimosa_falcipinna.androecium.filaments.colour = 'pinkish'

Mimosa_falcipinna.ginoecium = new Ginoecium()
Mimosa_falcipinna.ginoecium.ovary = new Ovary()

Mimosa_falcipinna.fruit = new Fruit()
Mimosa_falcipinna.fruit.stipe = new Stipe()
Mimosa_falcipinna.fruit.replum = new Replum()
Mimosa_falcipinna.fruit.epicarp = new Epicarp()

Mimosa_falcipinna.seed = new Seed()


// Description authorship
Mimosa_falcipinna.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_falcipinna.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709351 
})


// Sources


// Export Mimosa falcipinna
export { Mimosa_falcipinna }