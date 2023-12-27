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


// Description of Mimosa sericantha
const Mimosa_sericantha = new Mimosa()
Mimosa_sericantha.specificEpithet = 'sericantha'

Mimosa_sericantha.stems = new Stems()

Mimosa_sericantha.stipule = new Stipule()
Mimosa_sericantha.stipule.margin = new MarginStipule()
Mimosa_sericantha.stipule.adaxial = new AdaxialStipule()
Mimosa_sericantha.stipule.abaxial = new AbaxialStipule()

Mimosa_sericantha.leaf = new Leaf()
Mimosa_sericantha.leaf.petiole = new Petiole()
Mimosa_sericantha.leaf.bipinnate = new Bipinnate()
Mimosa_sericantha.leaf.bipinnate.rachis = new Rachis()
Mimosa_sericantha.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_sericantha.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_sericantha.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(2, 4)
Mimosa_sericantha.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_sericantha.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_sericantha.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_sericantha.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(15, 19)
Mimosa_sericantha.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_sericantha.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_sericantha.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_sericantha.inflorescence = new Inflorescence()
Mimosa_sericantha.inflorescence.peduncle = new Peduncle()
Mimosa_sericantha.inflorescence.spicate = new Spicate()

Mimosa_sericantha.flower = new Flower()
Mimosa_sericantha.flower.bracteole = new Bracteole()
Mimosa_sericantha.flower.merism = '4-merous'
Mimosa_sericantha.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_sericantha.flower.calyx = new Calyx()
Mimosa_sericantha.flower.calyx.shape = 'campanulate'
Mimosa_sericantha.flower.corolla = new Corolla()
Mimosa_sericantha.flower.corolla.shape = 'turbinate'

Mimosa_sericantha.androecium = new Androecium()
Mimosa_sericantha.androecium.filaments = new Filaments()
Mimosa_sericantha.androecium.filaments.colour = 'pinkish'

Mimosa_sericantha.ginoecium = new Ginoecium()
Mimosa_sericantha.ginoecium.ovary = new Ovary()

Mimosa_sericantha.fruit = new Fruit()
Mimosa_sericantha.fruit.stipe = new Stipe()
Mimosa_sericantha.fruit.replum = new Replum()
Mimosa_sericantha.fruit.epicarp = new Epicarp()

Mimosa_sericantha.seed = new Seed()


// Description authorship
Mimosa_sericantha.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_sericantha.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa sericantha
export { Mimosa_sericantha }