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


// Description of Mimosa capito
const Mimosa_capito = new Mimosa()
Mimosa_capito.specificEpithet = 'capito'

Mimosa_capito.stems = new Stems()

Mimosa_capito.stipule = new Stipule()
Mimosa_capito.stipule.margin = new MarginStipule()
Mimosa_capito.stipule.adaxial = new AdaxialStipule()
Mimosa_capito.stipule.abaxial = new AbaxialStipule()

Mimosa_capito.leaf = new Leaf()
Mimosa_capito.leaf.petiole = new Petiole()
Mimosa_capito.leaf.bipinnate = new Bipinnate()
Mimosa_capito.leaf.bipinnate.rachis = new Rachis()
Mimosa_capito.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_capito.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_capito.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(14, 22)
Mimosa_capito.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_capito.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_capito.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_capito.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(33, 55)
Mimosa_capito.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_capito.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_capito.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_capito.inflorescence = new Inflorescence()
Mimosa_capito.inflorescence.peduncle = new Peduncle()
Mimosa_capito.inflorescence.capitate = new CapitateInflorescence()

Mimosa_capito.flower = new Flower()
Mimosa_capito.flower.bracteole = new Bracteole()
Mimosa_capito.flower.merism = '4-merous'
Mimosa_capito.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_capito.flower.calyx = new Calyx()
Mimosa_capito.flower.calyx.shape = 'campanulate'
Mimosa_capito.flower.corolla = new Corolla()
Mimosa_capito.flower.corolla.shape = 'vase-shaped'

Mimosa_capito.androecium = new Androecium()
Mimosa_capito.androecium.filaments = new Filaments()
Mimosa_capito.androecium.filaments.colour = 'pinkish'

Mimosa_capito.ginoecium = new Ginoecium()
Mimosa_capito.ginoecium.ovary = new Ovary()

Mimosa_capito.fruit = new Fruit()
Mimosa_capito.fruit.stipe = new Stipe()
Mimosa_capito.fruit.replum = new Replum()
Mimosa_capito.fruit.epicarp = new Epicarp()

Mimosa_capito.seed = new Seed()


// Description authorship
Mimosa_capito.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_capito.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709349 
})


// Sources


// Export Mimosa capito
export { Mimosa_capito }