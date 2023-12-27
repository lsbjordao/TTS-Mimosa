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


// Description of Mimosa lewisii
const Mimosa_lewisii = new Mimosa()
Mimosa_lewisii.specificEpithet = 'lewisii'

Mimosa_lewisii.stems = new Stems()

Mimosa_lewisii.stipule = new Stipule()
Mimosa_lewisii.stipule.margin = new MarginStipule()
Mimosa_lewisii.stipule.adaxial = new AdaxialStipule()
Mimosa_lewisii.stipule.abaxial = new AbaxialStipule()

Mimosa_lewisii.leaf = new Leaf()
Mimosa_lewisii.leaf.petiole = new Petiole()
Mimosa_lewisii.leaf.bipinnate = new Bipinnate()
Mimosa_lewisii.leaf.bipinnate.rachis = new Rachis()
Mimosa_lewisii.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_lewisii.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_lewisii.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(6, 14)
Mimosa_lewisii.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMax(16)
Mimosa_lewisii.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_lewisii.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_lewisii.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_lewisii.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(2, 3)
Mimosa_lewisii.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_lewisii.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_lewisii.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_lewisii.inflorescence = new Inflorescence()
Mimosa_lewisii.inflorescence.peduncle = new Peduncle()
Mimosa_lewisii.inflorescence.capitate = new CapitateInflorescence()

Mimosa_lewisii.flower = new Flower()
Mimosa_lewisii.flower.bracteole = new Bracteole()
Mimosa_lewisii.flower.merism = ['4-merous', '5-merous']
Mimosa_lewisii.flower.calyx = new Calyx()
Mimosa_lewisii.flower.calyx.shape = 'campanulate'
Mimosa_lewisii.flower.corolla = new Corolla()

Mimosa_lewisii.androecium = new Androecium()
Mimosa_lewisii.androecium.filaments = new Filaments()
Mimosa_lewisii.androecium.filaments.colour = 'whitenish'

Mimosa_lewisii.ginoecium = new Ginoecium()
Mimosa_lewisii.ginoecium.ovary = new Ovary()

Mimosa_lewisii.fruit = new Fruit()
Mimosa_lewisii.fruit.stipe = new Stipe()
Mimosa_lewisii.fruit.replum = new Replum()
Mimosa_lewisii.fruit.epicarp = new Epicarp()

Mimosa_lewisii.seed = new Seed()


// Description authorship
Mimosa_lewisii.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_lewisii.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa lewisii
export { Mimosa_lewisii }