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


// Description of Mimosa leonardii
const Mimosa_leonardii = new Mimosa()
Mimosa_leonardii.specificEpithet = 'leonardii'

Mimosa_leonardii.stems = new Stems()

Mimosa_leonardii.stipule = new Stipule()
Mimosa_leonardii.stipule.margin = new MarginStipule()
Mimosa_leonardii.stipule.adaxial = new AdaxialStipule()
Mimosa_leonardii.stipule.abaxial = new AbaxialStipule()

Mimosa_leonardii.leaf = new Leaf()
Mimosa_leonardii.leaf.petiole = new Petiole()
Mimosa_leonardii.leaf.bipinnate = new Bipinnate()
Mimosa_leonardii.leaf.bipinnate.rachis = new Rachis()
Mimosa_leonardii.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_leonardii.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_leonardii.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(2, 4)
Mimosa_leonardii.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_leonardii.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_leonardii.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_leonardii.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_leonardii.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_leonardii.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_leonardii.inflorescence = new Inflorescence()
Mimosa_leonardii.inflorescence.peduncle = new Peduncle()
Mimosa_leonardii.inflorescence.capitate = new CapitateInflorescence()

Mimosa_leonardii.flower = new Flower()
Mimosa_leonardii.flower.bracteole = new Bracteole()
Mimosa_leonardii.flower.merism = ['4-merous', '5-merous']
Mimosa_leonardii.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_leonardii.flower.calyx = new Calyx()
Mimosa_leonardii.flower.calyx.shape = 'campanulate'
Mimosa_leonardii.flower.corolla = new Corolla()
Mimosa_leonardii.flower.corolla.shape = 'vase-shaped'

Mimosa_leonardii.androecium = new Androecium()
Mimosa_leonardii.androecium.filaments = new Filaments()
Mimosa_leonardii.androecium.filaments.colour = 'whitenish'

Mimosa_leonardii.ginoecium = new Ginoecium()
Mimosa_leonardii.ginoecium.ovary = new Ovary()

Mimosa_leonardii.fruit = new Fruit()
Mimosa_leonardii.fruit.stipe = new Stipe()
Mimosa_leonardii.fruit.replum = new Replum()
Mimosa_leonardii.fruit.epicarp = new Epicarp()

Mimosa_leonardii.seed = new Seed()


// Description authorship
Mimosa_leonardii.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_leonardii.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa leonardii
export { Mimosa_leonardii }