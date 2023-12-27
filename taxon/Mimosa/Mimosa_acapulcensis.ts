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


// Description of Mimosa acapulcensis
const Mimosa_acapulcensis = new Mimosa()
Mimosa_acapulcensis.specificEpithet = 'acapulcensis'

Mimosa_acapulcensis.stems = new Stems()

Mimosa_acapulcensis.stipule = new Stipule()
Mimosa_acapulcensis.stipule.margin = new MarginStipule()
Mimosa_acapulcensis.stipule.adaxial = new AdaxialStipule()
Mimosa_acapulcensis.stipule.abaxial = new AbaxialStipule()

Mimosa_acapulcensis.leaf = new Leaf()
Mimosa_acapulcensis.leaf.petiole = new Petiole()
Mimosa_acapulcensis.leaf.bipinnate = new Bipinnate()
Mimosa_acapulcensis.leaf.bipinnate.rachis = new Rachis()
Mimosa_acapulcensis.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_acapulcensis.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_acapulcensis.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_acapulcensis.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_acapulcensis.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_acapulcensis.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_acapulcensis.leaf.bipinnate.pinnae.leaflet.setNumberOfPairs(2)
Mimosa_acapulcensis.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_acapulcensis.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_acapulcensis.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_acapulcensis.inflorescence = new Inflorescence()
Mimosa_acapulcensis.inflorescence.peduncle = new Peduncle()
Mimosa_acapulcensis.inflorescence.capitate = new CapitateInflorescence()

Mimosa_acapulcensis.flower = new Flower()
Mimosa_acapulcensis.flower.bracteole = new Bracteole()
Mimosa_acapulcensis.flower.merism = '4-merous'
Mimosa_acapulcensis.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_acapulcensis.flower.calyx = new Calyx()
Mimosa_acapulcensis.flower.corolla = new Corolla()
Mimosa_acapulcensis.flower.corolla.shape = 'vase-shaped'

Mimosa_acapulcensis.androecium = new Androecium()
Mimosa_acapulcensis.androecium.filaments = new Filaments()
Mimosa_acapulcensis.androecium.filaments.colour = 'pinkish'

Mimosa_acapulcensis.ginoecium = new Ginoecium()
Mimosa_acapulcensis.ginoecium.ovary = new Ovary()

Mimosa_acapulcensis.fruit = new Fruit()
Mimosa_acapulcensis.fruit.stipe = new Stipe()
Mimosa_acapulcensis.fruit.replum = new Replum()
Mimosa_acapulcensis.fruit.epicarp = new Epicarp()

Mimosa_acapulcensis.seed = new Seed()


// Description authorship
Mimosa_acapulcensis.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_acapulcensis.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709349 
})


// Sources


// Export Mimosa acapulcensis
export { Mimosa_acapulcensis }