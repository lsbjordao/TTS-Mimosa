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


// Description of Mimosa alleniana
const Mimosa_alleniana = new Mimosa()
Mimosa_alleniana.specificEpithet = 'alleniana'

Mimosa_alleniana.stems = new Stems()

Mimosa_alleniana.stipule = new Stipule()
Mimosa_alleniana.stipule.margin = new MarginStipule()
Mimosa_alleniana.stipule.adaxial = new AdaxialStipule()
Mimosa_alleniana.stipule.abaxial = new AbaxialStipule()

Mimosa_alleniana.leaf = new Leaf()
Mimosa_alleniana.leaf.petiole = new Petiole()
Mimosa_alleniana.leaf.bipinnate = new Bipinnate()
Mimosa_alleniana.leaf.bipinnate.rachis = new Rachis()
Mimosa_alleniana.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_alleniana.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_alleniana.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_alleniana.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_alleniana.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_alleniana.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_alleniana.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(15)
Mimosa_alleniana.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(20, 29)
Mimosa_alleniana.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_alleniana.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_alleniana.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_alleniana.inflorescence = new Inflorescence()
Mimosa_alleniana.inflorescence.peduncle = new Peduncle()
Mimosa_alleniana.inflorescence.capitate = new CapitateInflorescence()

Mimosa_alleniana.flower = new Flower()
Mimosa_alleniana.flower.bracteole = new Bracteole()
Mimosa_alleniana.flower.merism = '4-merous'
Mimosa_alleniana.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_alleniana.flower.calyx = new Calyx()
Mimosa_alleniana.flower.corolla = new Corolla()
Mimosa_alleniana.flower.corolla.shape = ['turbinate', 'funnelform']

Mimosa_alleniana.androecium = new Androecium()
Mimosa_alleniana.androecium.filaments = new Filaments()
Mimosa_alleniana.androecium.filaments.colour = 'pinkish'

Mimosa_alleniana.ginoecium = new Ginoecium()
Mimosa_alleniana.ginoecium.ovary = new Ovary()

Mimosa_alleniana.fruit = new Fruit()
Mimosa_alleniana.fruit.stipe = new Stipe()
Mimosa_alleniana.fruit.replum = new Replum()
Mimosa_alleniana.fruit.epicarp = new Epicarp()

Mimosa_alleniana.seed = new Seed()


// Description authorship
Mimosa_alleniana.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_alleniana.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709349 
})


// Sources


// Export Mimosa alleniana
export { Mimosa_alleniana }