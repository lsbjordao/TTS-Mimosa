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


// Description of Mimosa pectinatipinna
const Mimosa_pectinatipinna = new Mimosa()
Mimosa_pectinatipinna.specificEpithet = 'pectinatipinna'

Mimosa_pectinatipinna.stems = new Stems()

Mimosa_pectinatipinna.stipule = new Stipule()
Mimosa_pectinatipinna.stipule.margin = new MarginStipule()
Mimosa_pectinatipinna.stipule.adaxial = new AdaxialStipule()
Mimosa_pectinatipinna.stipule.abaxial = new AbaxialStipule()

Mimosa_pectinatipinna.leaf = new Leaf()
Mimosa_pectinatipinna.leaf.petiole = new Petiole()
Mimosa_pectinatipinna.leaf.bipinnate = new Bipinnate()
Mimosa_pectinatipinna.leaf.bipinnate.rachis = new Rachis()
Mimosa_pectinatipinna.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_pectinatipinna.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_pectinatipinna.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_pectinatipinna.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_pectinatipinna.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_pectinatipinna.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_pectinatipinna.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(4)
Mimosa_pectinatipinna.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(5, 9)
Mimosa_pectinatipinna.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMax(11)
Mimosa_pectinatipinna.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_pectinatipinna.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_pectinatipinna.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_pectinatipinna.inflorescence = new Inflorescence()
Mimosa_pectinatipinna.inflorescence.peduncle = new Peduncle()
Mimosa_pectinatipinna.inflorescence.capitate = new CapitateInflorescence()

Mimosa_pectinatipinna.flower = new Flower()
Mimosa_pectinatipinna.flower.bracteole = new Bracteole()
Mimosa_pectinatipinna.flower.calyx = new Calyx()
Mimosa_pectinatipinna.flower.corolla = new Corolla()
Mimosa_pectinatipinna.flower.corolla.shape = 'vase-shaped'

Mimosa_pectinatipinna.androecium = new Androecium()
Mimosa_pectinatipinna.androecium.filaments = new Filaments()
Mimosa_pectinatipinna.androecium.filaments.colour = ['pinkish', 'whitenish']

Mimosa_pectinatipinna.ginoecium = new Ginoecium()
Mimosa_pectinatipinna.ginoecium.ovary = new Ovary()

Mimosa_pectinatipinna.fruit = new Fruit()
Mimosa_pectinatipinna.fruit.stipe = new Stipe()
Mimosa_pectinatipinna.fruit.replum = new Replum()
Mimosa_pectinatipinna.fruit.epicarp = new Epicarp()

Mimosa_pectinatipinna.seed = new Seed()


// Description authorship
Mimosa_pectinatipinna.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_pectinatipinna.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa pectinatipinna
export { Mimosa_pectinatipinna }