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


// Description of Mimosa trianae
const Mimosa_trianae = new Mimosa()
Mimosa_trianae.specificEpithet = 'trianae'

Mimosa_trianae.stems = new Stems()

Mimosa_trianae.stipule = new Stipule()
Mimosa_trianae.stipule.margin = new MarginStipule()
Mimosa_trianae.stipule.adaxial = new AdaxialStipule()
Mimosa_trianae.stipule.abaxial = new AbaxialStipule()

Mimosa_trianae.leaf = new Leaf()
Mimosa_trianae.leaf.petiole = new Petiole()
Mimosa_trianae.leaf.bipinnate = new Bipinnate()
Mimosa_trianae.leaf.bipinnate.rachis = new Rachis()
Mimosa_trianae.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_trianae.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_trianae.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(12, 20)
Mimosa_trianae.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_trianae.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_trianae.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_trianae.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(16, 29)
Mimosa_trianae.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_trianae.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_trianae.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_trianae.inflorescence = new Inflorescence()
Mimosa_trianae.inflorescence.peduncle = new Peduncle()
Mimosa_trianae.inflorescence.spicate = new Spicate()

Mimosa_trianae.flower = new Flower()
Mimosa_trianae.flower.bracteole = new Bracteole()
Mimosa_trianae.flower.merism = '4-merous'
Mimosa_trianae.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_trianae.flower.calyx = new Calyx()
Mimosa_trianae.flower.calyx.shape = 'campanulate'
Mimosa_trianae.flower.corolla = new Corolla()

Mimosa_trianae.androecium = new Androecium()
Mimosa_trianae.androecium.filaments = new Filaments()
Mimosa_trianae.androecium.filaments.colour = 'whitenish'

Mimosa_trianae.ginoecium = new Ginoecium()
Mimosa_trianae.ginoecium.ovary = new Ovary()

Mimosa_trianae.fruit = new Fruit()
Mimosa_trianae.fruit.stipe = new Stipe()
Mimosa_trianae.fruit.replum = new Replum()
Mimosa_trianae.fruit.epicarp = new Epicarp()

Mimosa_trianae.seed = new Seed()


// Description authorship
Mimosa_trianae.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_trianae.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa trianae
export { Mimosa_trianae }