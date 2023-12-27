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


// Description of Mimosa setuligera
const Mimosa_setuligera = new Mimosa()
Mimosa_setuligera.specificEpithet = 'setuligera'

Mimosa_setuligera.stems = new Stems()

Mimosa_setuligera.stipule = new Stipule()
Mimosa_setuligera.stipule.margin = new MarginStipule()
Mimosa_setuligera.stipule.adaxial = new AdaxialStipule()
Mimosa_setuligera.stipule.abaxial = new AbaxialStipule()

Mimosa_setuligera.leaf = new Leaf()
Mimosa_setuligera.leaf.petiole = new Petiole()
Mimosa_setuligera.leaf.bipinnate = new Bipinnate()
Mimosa_setuligera.leaf.bipinnate.rachis = new Rachis()
Mimosa_setuligera.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_setuligera.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_setuligera.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMin(6)
Mimosa_setuligera.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(8, 11)
Mimosa_setuligera.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_setuligera.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_setuligera.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_setuligera.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(1, 2)
Mimosa_setuligera.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_setuligera.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_setuligera.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_setuligera.inflorescence = new Inflorescence()
Mimosa_setuligera.inflorescence.peduncle = new Peduncle()
Mimosa_setuligera.inflorescence.capitate = new CapitateInflorescence()

Mimosa_setuligera.flower = new Flower()
Mimosa_setuligera.flower.bracteole = new Bracteole()
Mimosa_setuligera.flower.merism = ['3-merous', '4-merous']
Mimosa_setuligera.flower.calyx = new Calyx()
Mimosa_setuligera.flower.calyx.shape = 'campanulate'
Mimosa_setuligera.flower.corolla = new Corolla()

Mimosa_setuligera.androecium = new Androecium()
Mimosa_setuligera.androecium.filaments = new Filaments()
Mimosa_setuligera.androecium.filaments.colour = 'pinkish'

Mimosa_setuligera.ginoecium = new Ginoecium()
Mimosa_setuligera.ginoecium.ovary = new Ovary()

Mimosa_setuligera.fruit = new Fruit()
Mimosa_setuligera.fruit.stipe = new Stipe()
Mimosa_setuligera.fruit.replum = new Replum()
Mimosa_setuligera.fruit.epicarp = new Epicarp()

Mimosa_setuligera.seed = new Seed()


// Description authorship
Mimosa_setuligera.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_setuligera.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709351 
})


// Sources


// Export Mimosa setuligera
export { Mimosa_setuligera }