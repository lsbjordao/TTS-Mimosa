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


// Description of Mimosa strigillosa
const Mimosa_strigillosa = new Mimosa()
Mimosa_strigillosa.specificEpithet = 'strigillosa'

Mimosa_strigillosa.stems = new Stems()

Mimosa_strigillosa.stipule = new Stipule()
Mimosa_strigillosa.stipule.margin = new MarginStipule()
Mimosa_strigillosa.stipule.adaxial = new AdaxialStipule()
Mimosa_strigillosa.stipule.abaxial = new AbaxialStipule()

Mimosa_strigillosa.leaf = new Leaf()
Mimosa_strigillosa.leaf.petiole = new Petiole()
Mimosa_strigillosa.leaf.bipinnate = new Bipinnate()
Mimosa_strigillosa.leaf.bipinnate.rachis = new Rachis()
Mimosa_strigillosa.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_strigillosa.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_strigillosa.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMin(3)
Mimosa_strigillosa.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(4, 6)
Mimosa_strigillosa.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMax(7)
Mimosa_strigillosa.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_strigillosa.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_strigillosa.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_strigillosa.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_strigillosa.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_strigillosa.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_strigillosa.inflorescence = new Inflorescence()
Mimosa_strigillosa.inflorescence.peduncle = new Peduncle()
Mimosa_strigillosa.inflorescence.capitate = new CapitateInflorescence()

Mimosa_strigillosa.flower = new Flower()
Mimosa_strigillosa.flower.bracteole = new Bracteole()
Mimosa_strigillosa.flower.merism = ['4-merous', '5-merous']
Mimosa_strigillosa.flower.calyx = new Calyx()
Mimosa_strigillosa.flower.calyx.shape = 'campanulate'
Mimosa_strigillosa.flower.corolla = new Corolla()
Mimosa_strigillosa.flower.corolla.shape = ['turbinate', 'funnelform']

Mimosa_strigillosa.androecium = new Androecium()
Mimosa_strigillosa.androecium.filaments = new Filaments()
Mimosa_strigillosa.androecium.filaments.colour = ['pinkish', 'lilac']

Mimosa_strigillosa.ginoecium = new Ginoecium()
Mimosa_strigillosa.ginoecium.ovary = new Ovary()

Mimosa_strigillosa.fruit = new Fruit()
Mimosa_strigillosa.fruit.stipe = new Stipe()
Mimosa_strigillosa.fruit.replum = new Replum()
Mimosa_strigillosa.fruit.epicarp = new Epicarp()

Mimosa_strigillosa.seed = new Seed()


// Description authorship
Mimosa_strigillosa.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_strigillosa.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa strigillosa
export { Mimosa_strigillosa }