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


// Description of Mimosa pseudocallosa
const Mimosa_pseudocallosa = new Mimosa()
Mimosa_pseudocallosa.specificEpithet = 'pseudocallosa'

Mimosa_pseudocallosa.stems = new Stems()

Mimosa_pseudocallosa.stipule = new Stipule()
Mimosa_pseudocallosa.stipule.margin = new MarginStipule()
Mimosa_pseudocallosa.stipule.adaxial = new AdaxialStipule()
Mimosa_pseudocallosa.stipule.abaxial = new AbaxialStipule()

Mimosa_pseudocallosa.leaf = new Leaf()
Mimosa_pseudocallosa.leaf.petiole = new Petiole()
Mimosa_pseudocallosa.leaf.bipinnate = new Bipinnate()
Mimosa_pseudocallosa.leaf.bipinnate.rachis = new Rachis()
Mimosa_pseudocallosa.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_pseudocallosa.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_pseudocallosa.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_pseudocallosa.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_pseudocallosa.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_pseudocallosa.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_pseudocallosa.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_pseudocallosa.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_pseudocallosa.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_pseudocallosa.inflorescence = new Inflorescence()
Mimosa_pseudocallosa.inflorescence.peduncle = new Peduncle()
Mimosa_pseudocallosa.inflorescence.capitate = new CapitateInflorescence()

Mimosa_pseudocallosa.flower = new Flower()
Mimosa_pseudocallosa.flower.bracteole = new Bracteole()
Mimosa_pseudocallosa.flower.merism = '4-merous'
Mimosa_pseudocallosa.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_pseudocallosa.flower.calyx = new Calyx()
Mimosa_pseudocallosa.flower.corolla = new Corolla()
Mimosa_pseudocallosa.flower.corolla.shape = 'vase-shaped'

Mimosa_pseudocallosa.androecium = new Androecium()
Mimosa_pseudocallosa.androecium.filaments = new Filaments()
Mimosa_pseudocallosa.androecium.filaments.colour = 'pinkish'

Mimosa_pseudocallosa.ginoecium = new Ginoecium()
Mimosa_pseudocallosa.ginoecium.ovary = new Ovary()

Mimosa_pseudocallosa.fruit = new Fruit()
Mimosa_pseudocallosa.fruit.stipe = new Stipe()
Mimosa_pseudocallosa.fruit.replum = new Replum()
Mimosa_pseudocallosa.fruit.epicarp = new Epicarp()

Mimosa_pseudocallosa.seed = new Seed()


// Description authorship
Mimosa_pseudocallosa.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_pseudocallosa.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa pseudocallosa
export { Mimosa_pseudocallosa }