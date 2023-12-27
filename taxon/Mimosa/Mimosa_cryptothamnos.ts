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


// Description of Mimosa cryptothamnos
const Mimosa_cryptothamnos = new Mimosa()
Mimosa_cryptothamnos.specificEpithet = 'cryptothamnos'

Mimosa_cryptothamnos.stems = new Stems()

Mimosa_cryptothamnos.stipule = new Stipule()
Mimosa_cryptothamnos.stipule.margin = new MarginStipule()
Mimosa_cryptothamnos.stipule.adaxial = new AdaxialStipule()
Mimosa_cryptothamnos.stipule.abaxial = new AbaxialStipule()

Mimosa_cryptothamnos.leaf = new Leaf()
Mimosa_cryptothamnos.leaf.petiole = new Petiole()
Mimosa_cryptothamnos.leaf.bipinnate = new Bipinnate()
Mimosa_cryptothamnos.leaf.bipinnate.rachis = new Rachis()
Mimosa_cryptothamnos.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_cryptothamnos.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_cryptothamnos.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMin(9)
Mimosa_cryptothamnos.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(13, 21)
Mimosa_cryptothamnos.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_cryptothamnos.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_cryptothamnos.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_cryptothamnos.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_cryptothamnos.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_cryptothamnos.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_cryptothamnos.inflorescence = new Inflorescence()
Mimosa_cryptothamnos.inflorescence.peduncle = new Peduncle()
Mimosa_cryptothamnos.inflorescence.capitate = new CapitateInflorescence()

Mimosa_cryptothamnos.flower = new Flower()
Mimosa_cryptothamnos.flower.bracteole = new Bracteole()
Mimosa_cryptothamnos.flower.merism = '4-merous'
Mimosa_cryptothamnos.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_cryptothamnos.flower.calyx = new Calyx()
Mimosa_cryptothamnos.flower.calyx.shape = 'campanulate'
Mimosa_cryptothamnos.flower.corolla = new Corolla()
Mimosa_cryptothamnos.flower.corolla.shape = 'funnelform'

Mimosa_cryptothamnos.androecium = new Androecium()
Mimosa_cryptothamnos.androecium.filaments = new Filaments()
Mimosa_cryptothamnos.androecium.filaments.colour = 'pinkish'

Mimosa_cryptothamnos.ginoecium = new Ginoecium()
Mimosa_cryptothamnos.ginoecium.ovary = new Ovary()

Mimosa_cryptothamnos.fruit = new Fruit()
Mimosa_cryptothamnos.fruit.stipe = new Stipe()
Mimosa_cryptothamnos.fruit.replum = new Replum()
Mimosa_cryptothamnos.fruit.epicarp = new Epicarp()

Mimosa_cryptothamnos.seed = new Seed()


// Description authorship
Mimosa_cryptothamnos.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_cryptothamnos.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa cryptothamnos
export { Mimosa_cryptothamnos }