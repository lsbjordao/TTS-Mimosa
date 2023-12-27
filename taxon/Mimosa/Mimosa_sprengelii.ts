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


// Description of Mimosa sprengelii
const Mimosa_sprengelii = new Mimosa()
Mimosa_sprengelii.specificEpithet = 'sprengelii'

Mimosa_sprengelii.stems = new Stems()

Mimosa_sprengelii.stipule = new Stipule()
Mimosa_sprengelii.stipule.margin = new MarginStipule()
Mimosa_sprengelii.stipule.adaxial = new AdaxialStipule()
Mimosa_sprengelii.stipule.abaxial = new AbaxialStipule()

Mimosa_sprengelii.leaf = new Leaf()
Mimosa_sprengelii.leaf.petiole = new Petiole()
Mimosa_sprengelii.leaf.bipinnate = new Bipinnate()
Mimosa_sprengelii.leaf.bipinnate.rachis = new Rachis()
Mimosa_sprengelii.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_sprengelii.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_sprengelii.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_sprengelii.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_sprengelii.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_sprengelii.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_sprengelii.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(19, 30)
Mimosa_sprengelii.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMax(34)
Mimosa_sprengelii.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_sprengelii.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_sprengelii.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_sprengelii.inflorescence = new Inflorescence()
Mimosa_sprengelii.inflorescence.peduncle = new Peduncle()
Mimosa_sprengelii.inflorescence.capitate = new CapitateInflorescence()

Mimosa_sprengelii.flower = new Flower()
Mimosa_sprengelii.flower.bracteole = new Bracteole()
Mimosa_sprengelii.flower.merism = '4-merous'
Mimosa_sprengelii.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_sprengelii.flower.calyx = new Calyx()
Mimosa_sprengelii.flower.calyx.shape = 'collar'
Mimosa_sprengelii.flower.corolla = new Corolla()
Mimosa_sprengelii.flower.corolla.shape = 'funnelform'

Mimosa_sprengelii.androecium = new Androecium()
Mimosa_sprengelii.androecium.filaments = new Filaments()
Mimosa_sprengelii.androecium.filaments.colour = ['pinkish', 'lilac']

Mimosa_sprengelii.ginoecium = new Ginoecium()
Mimosa_sprengelii.ginoecium.ovary = new Ovary()

Mimosa_sprengelii.fruit = new Fruit()
Mimosa_sprengelii.fruit.stipe = new Stipe()
Mimosa_sprengelii.fruit.replum = new Replum()
Mimosa_sprengelii.fruit.epicarp = new Epicarp()

Mimosa_sprengelii.seed = new Seed()


// Description authorship
Mimosa_sprengelii.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_sprengelii.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa sprengelii
export { Mimosa_sprengelii }