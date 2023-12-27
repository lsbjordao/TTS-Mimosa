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


// Description of Mimosa townsendii
const Mimosa_townsendii = new Mimosa()
Mimosa_townsendii.specificEpithet = 'townsendii'

Mimosa_townsendii.stems = new Stems()

Mimosa_townsendii.stipule = new Stipule()
Mimosa_townsendii.stipule.margin = new MarginStipule()
Mimosa_townsendii.stipule.adaxial = new AdaxialStipule()
Mimosa_townsendii.stipule.abaxial = new AbaxialStipule()

Mimosa_townsendii.leaf = new Leaf()
Mimosa_townsendii.leaf.petiole = new Petiole()
Mimosa_townsendii.leaf.bipinnate = new Bipinnate()
Mimosa_townsendii.leaf.bipinnate.rachis = new Rachis()
Mimosa_townsendii.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_townsendii.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_townsendii.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(8, 15)
Mimosa_townsendii.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_townsendii.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_townsendii.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_townsendii.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_townsendii.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_townsendii.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_townsendii.inflorescence = new Inflorescence()
Mimosa_townsendii.inflorescence.peduncle = new Peduncle()
Mimosa_townsendii.inflorescence.spicate = new Spicate()

Mimosa_townsendii.flower = new Flower()
Mimosa_townsendii.flower.bracteole = new Bracteole()
Mimosa_townsendii.flower.merism = '4-merous'
Mimosa_townsendii.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_townsendii.flower.calyx = new Calyx()
Mimosa_townsendii.flower.calyx.shape = 'campanulate'
Mimosa_townsendii.flower.corolla = new Corolla()

Mimosa_townsendii.androecium = new Androecium()
Mimosa_townsendii.androecium.filaments = new Filaments()
Mimosa_townsendii.androecium.filaments.colour = 'whitenish'

Mimosa_townsendii.ginoecium = new Ginoecium()
Mimosa_townsendii.ginoecium.ovary = new Ovary()

Mimosa_townsendii.fruit = new Fruit()
Mimosa_townsendii.fruit.stipe = new Stipe()
Mimosa_townsendii.fruit.replum = new Replum()
Mimosa_townsendii.fruit.epicarp = new Epicarp()

Mimosa_townsendii.seed = new Seed()


// Description authorship
Mimosa_townsendii.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_townsendii.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa townsendii
export { Mimosa_townsendii }