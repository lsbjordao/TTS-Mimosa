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


// Description of Mimosa watsonii
const Mimosa_watsonii = new Mimosa()
Mimosa_watsonii.specificEpithet = 'watsonii'

Mimosa_watsonii.stems = new Stems()

Mimosa_watsonii.stipule = new Stipule()
Mimosa_watsonii.stipule.margin = new MarginStipule()
Mimosa_watsonii.stipule.adaxial = new AdaxialStipule()
Mimosa_watsonii.stipule.abaxial = new AbaxialStipule()

Mimosa_watsonii.leaf = new Leaf()
Mimosa_watsonii.leaf.petiole = new Petiole()
Mimosa_watsonii.leaf.bipinnate = new Bipinnate()
Mimosa_watsonii.leaf.bipinnate.rachis = new Rachis()
Mimosa_watsonii.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_watsonii.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_watsonii.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(2, 7)
Mimosa_watsonii.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_watsonii.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_watsonii.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_watsonii.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(40, 65)
Mimosa_watsonii.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_watsonii.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_watsonii.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_watsonii.inflorescence = new Inflorescence()
Mimosa_watsonii.inflorescence.peduncle = new Peduncle()
Mimosa_watsonii.inflorescence.capitate = new CapitateInflorescence()

Mimosa_watsonii.flower = new Flower()
Mimosa_watsonii.flower.bracteole = new Bracteole()
Mimosa_watsonii.flower.merism = ['4-merous', '5-merous']
Mimosa_watsonii.flower.calyx = new Calyx()
Mimosa_watsonii.flower.calyx.shape = 'campanulate'
Mimosa_watsonii.flower.corolla = new Corolla()
Mimosa_watsonii.flower.corolla.shape = 'turbinate'

Mimosa_watsonii.androecium = new Androecium()
Mimosa_watsonii.androecium.filaments = new Filaments()
Mimosa_watsonii.androecium.filaments.colour = 'whitenish'

Mimosa_watsonii.ginoecium = new Ginoecium()
Mimosa_watsonii.ginoecium.ovary = new Ovary()

Mimosa_watsonii.fruit = new Fruit()
Mimosa_watsonii.fruit.stipe = new Stipe()
Mimosa_watsonii.fruit.replum = new Replum()
Mimosa_watsonii.fruit.epicarp = new Epicarp()

Mimosa_watsonii.seed = new Seed()


// Description authorship
Mimosa_watsonii.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_watsonii.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa watsonii
export { Mimosa_watsonii }