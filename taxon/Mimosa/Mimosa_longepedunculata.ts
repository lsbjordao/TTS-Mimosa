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


// Description of Mimosa longepedunculata
const Mimosa_longepedunculata = new Mimosa()
Mimosa_longepedunculata.specificEpithet = 'longepedunculata'

Mimosa_longepedunculata.stems = new Stems()

Mimosa_longepedunculata.stipule = new Stipule()
Mimosa_longepedunculata.stipule.margin = new MarginStipule()
Mimosa_longepedunculata.stipule.adaxial = new AdaxialStipule()
Mimosa_longepedunculata.stipule.abaxial = new AbaxialStipule()

Mimosa_longepedunculata.leaf = new Leaf()
Mimosa_longepedunculata.leaf.petiole = new Petiole()
Mimosa_longepedunculata.leaf.bipinnate = new Bipinnate()
Mimosa_longepedunculata.leaf.bipinnate.rachis = new Rachis()
Mimosa_longepedunculata.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_longepedunculata.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_longepedunculata.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(10, 20)
Mimosa_longepedunculata.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_longepedunculata.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_longepedunculata.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_longepedunculata.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_longepedunculata.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_longepedunculata.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_longepedunculata.inflorescence = new Inflorescence()
Mimosa_longepedunculata.inflorescence.peduncle = new Peduncle()
Mimosa_longepedunculata.inflorescence.capitate = new CapitateInflorescence()

Mimosa_longepedunculata.flower = new Flower()
Mimosa_longepedunculata.flower.bracteole = new Bracteole()
Mimosa_longepedunculata.flower.merism = '4-merous'
Mimosa_longepedunculata.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_longepedunculata.flower.calyx = new Calyx()
Mimosa_longepedunculata.flower.calyx.shape = 'campanulate'
Mimosa_longepedunculata.flower.corolla = new Corolla()
Mimosa_longepedunculata.flower.corolla.shape = 'funnelform'

Mimosa_longepedunculata.androecium = new Androecium()
Mimosa_longepedunculata.androecium.filaments = new Filaments()
Mimosa_longepedunculata.androecium.filaments.colour = 'pinkish'

Mimosa_longepedunculata.ginoecium = new Ginoecium()
Mimosa_longepedunculata.ginoecium.ovary = new Ovary()

Mimosa_longepedunculata.fruit = new Fruit()
Mimosa_longepedunculata.fruit.stipe = new Stipe()
Mimosa_longepedunculata.fruit.replum = new Replum()
Mimosa_longepedunculata.fruit.epicarp = new Epicarp()

Mimosa_longepedunculata.seed = new Seed()


// Description authorship
Mimosa_longepedunculata.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_longepedunculata.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa longepedunculata
export { Mimosa_longepedunculata }