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
import { Peduncle, Spicate } from '../../characters/v1/Inflorescence'
import { Calyx, Corolla, Bracteole } from '../../characters/v1/Flower'
import { Stipe, Epicarp, Replum } from '../../characters/v1/Fruit'
import { Filaments } from '../../characters/v1/Androecium'
import { Ovary } from '../../characters/v1/Ginoecium'
import { Seed } from '../../characters/v1/Seed'

// Import annotation classes
import { Source, DescriptionAuthorship } from '../../characters/v1'


// Description of Mimosa costenya
const Mimosa_costenya = new Mimosa()
Mimosa_costenya.specificEpithet = 'costenya'

Mimosa_costenya.stems = new Stems()

Mimosa_costenya.stipule = new Stipule()
Mimosa_costenya.stipule.margin = new MarginStipule()
Mimosa_costenya.stipule.adaxial = new AdaxialStipule()
Mimosa_costenya.stipule.abaxial = new AbaxialStipule()

Mimosa_costenya.leaf = new Leaf()
Mimosa_costenya.leaf.petiole = new Petiole()
Mimosa_costenya.leaf.bipinnate = new Bipinnate()
Mimosa_costenya.leaf.bipinnate.rachis = new Rachis()
Mimosa_costenya.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_costenya.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_costenya.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_costenya.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_costenya.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_costenya.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(1, 5)
Mimosa_costenya.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_costenya.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_costenya.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_costenya.inflorescence = new Inflorescence()
Mimosa_costenya.inflorescence.peduncle = new Peduncle()
Mimosa_costenya.inflorescence.spicate = new Spicate()

Mimosa_costenya.flower = new Flower()
Mimosa_costenya.flower.bracteole = new Bracteole()
Mimosa_costenya.flower.merism = '5-merous'
Mimosa_costenya.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_costenya.flower.calyx = new Calyx()
Mimosa_costenya.flower.calyx.shape = 'campanulate'
Mimosa_costenya.flower.corolla = new Corolla()

Mimosa_costenya.androecium = new Androecium()
Mimosa_costenya.androecium.filaments = new Filaments()
Mimosa_costenya.androecium.filaments.colour = ['pinkish', 'whitenish']

Mimosa_costenya.ginoecium = new Ginoecium()
Mimosa_costenya.ginoecium.ovary = new Ovary()

Mimosa_costenya.fruit = new Fruit()
Mimosa_costenya.fruit.stipe = new Stipe()
Mimosa_costenya.fruit.replum = new Replum()
Mimosa_costenya.fruit.epicarp = new Epicarp()

Mimosa_costenya.seed = new Seed()


// Description authorship
Mimosa_costenya.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_costenya.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa costenya
export { Mimosa_costenya }