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


// Description of Mimosa cruenta
const Mimosa_cruenta = new Mimosa()
Mimosa_cruenta.specificEpithet = 'cruenta'

Mimosa_cruenta.stems = new Stems()

Mimosa_cruenta.stipule = new Stipule()
Mimosa_cruenta.stipule.margin = new MarginStipule()
Mimosa_cruenta.stipule.adaxial = new AdaxialStipule()
Mimosa_cruenta.stipule.abaxial = new AbaxialStipule()

Mimosa_cruenta.leaf = new Leaf()
Mimosa_cruenta.leaf.petiole = new Petiole()
Mimosa_cruenta.leaf.bipinnate = new Bipinnate()
Mimosa_cruenta.leaf.bipinnate.rachis = new Rachis()
Mimosa_cruenta.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_cruenta.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_cruenta.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(2, 4)
Mimosa_cruenta.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_cruenta.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_cruenta.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_cruenta.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(6, 11)
Mimosa_cruenta.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMax(12)
Mimosa_cruenta.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_cruenta.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_cruenta.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_cruenta.inflorescence = new Inflorescence()
Mimosa_cruenta.inflorescence.peduncle = new Peduncle()
Mimosa_cruenta.inflorescence.capitate = new CapitateInflorescence()

Mimosa_cruenta.flower = new Flower()
Mimosa_cruenta.flower.bracteole = new Bracteole()
Mimosa_cruenta.flower.merism = ['3-merous', '4-merous', '5-merous']
Mimosa_cruenta.flower.calyx = new Calyx()
Mimosa_cruenta.flower.calyx.shape = 'campanulate'
Mimosa_cruenta.flower.corolla = new Corolla()
Mimosa_cruenta.flower.corolla.shape = 'turbinate'

Mimosa_cruenta.androecium = new Androecium()
Mimosa_cruenta.androecium.filaments = new Filaments()
Mimosa_cruenta.androecium.filaments.colour = 'pinkish'

Mimosa_cruenta.ginoecium = new Ginoecium()
Mimosa_cruenta.ginoecium.ovary = new Ovary()

Mimosa_cruenta.fruit = new Fruit()
Mimosa_cruenta.fruit.stipe = new Stipe()
Mimosa_cruenta.fruit.replum = new Replum()
Mimosa_cruenta.fruit.epicarp = new Epicarp()

Mimosa_cruenta.seed = new Seed()


// Description authorship
Mimosa_cruenta.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_cruenta.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa cruenta
export { Mimosa_cruenta }