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


// Description of Mimosa pycnocoma
const Mimosa_pycnocoma = new Mimosa()
Mimosa_pycnocoma.specificEpithet = 'pycnocoma'

Mimosa_pycnocoma.stems = new Stems()

Mimosa_pycnocoma.stipule = new Stipule()
Mimosa_pycnocoma.stipule.margin = new MarginStipule()
Mimosa_pycnocoma.stipule.adaxial = new AdaxialStipule()
Mimosa_pycnocoma.stipule.abaxial = new AbaxialStipule()

Mimosa_pycnocoma.leaf = new Leaf()
Mimosa_pycnocoma.leaf.petiole = new Petiole()
Mimosa_pycnocoma.leaf.bipinnate = new Bipinnate()
Mimosa_pycnocoma.leaf.bipinnate.rachis = new Rachis()
Mimosa_pycnocoma.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_pycnocoma.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_pycnocoma.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(12, 17)
Mimosa_pycnocoma.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_pycnocoma.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_pycnocoma.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_pycnocoma.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(6, 15)
Mimosa_pycnocoma.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMax(17)
Mimosa_pycnocoma.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_pycnocoma.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_pycnocoma.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_pycnocoma.inflorescence = new Inflorescence()
Mimosa_pycnocoma.inflorescence.peduncle = new Peduncle()
Mimosa_pycnocoma.inflorescence.capitate = new CapitateInflorescence()

Mimosa_pycnocoma.flower = new Flower()
Mimosa_pycnocoma.flower.bracteole = new Bracteole()
Mimosa_pycnocoma.flower.merism = '4-merous'
Mimosa_pycnocoma.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_pycnocoma.flower.calyx = new Calyx()
Mimosa_pycnocoma.flower.corolla = new Corolla()
Mimosa_pycnocoma.flower.corolla.shape = 'funnelform'

Mimosa_pycnocoma.androecium = new Androecium()
Mimosa_pycnocoma.androecium.filaments = new Filaments()
Mimosa_pycnocoma.androecium.filaments.colour = 'pinkish'

Mimosa_pycnocoma.ginoecium = new Ginoecium()
Mimosa_pycnocoma.ginoecium.ovary = new Ovary()

Mimosa_pycnocoma.fruit = new Fruit()
Mimosa_pycnocoma.fruit.stipe = new Stipe()
Mimosa_pycnocoma.fruit.replum = new Replum()
Mimosa_pycnocoma.fruit.epicarp = new Epicarp()

Mimosa_pycnocoma.seed = new Seed()


// Description authorship
Mimosa_pycnocoma.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_pycnocoma.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa pycnocoma
export { Mimosa_pycnocoma }