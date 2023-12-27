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


// Description of Mimosa spixiana
const Mimosa_spixiana = new Mimosa()
Mimosa_spixiana.specificEpithet = 'spixiana'

Mimosa_spixiana.stems = new Stems()

Mimosa_spixiana.stipule = new Stipule()
Mimosa_spixiana.stipule.margin = new MarginStipule()
Mimosa_spixiana.stipule.adaxial = new AdaxialStipule()
Mimosa_spixiana.stipule.abaxial = new AbaxialStipule()

Mimosa_spixiana.leaf = new Leaf()
Mimosa_spixiana.leaf.petiole = new Petiole()
Mimosa_spixiana.leaf.bipinnate = new Bipinnate()
Mimosa_spixiana.leaf.bipinnate.rachis = new Rachis()
Mimosa_spixiana.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_spixiana.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_spixiana.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(4, 5)
Mimosa_spixiana.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_spixiana.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_spixiana.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_spixiana.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(21)
Mimosa_spixiana.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(22, 40)
Mimosa_spixiana.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_spixiana.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_spixiana.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_spixiana.inflorescence = new Inflorescence()
Mimosa_spixiana.inflorescence.peduncle = new Peduncle()
Mimosa_spixiana.inflorescence.spicate = new Spicate()

Mimosa_spixiana.flower = new Flower()
Mimosa_spixiana.flower.bracteole = new Bracteole()
Mimosa_spixiana.flower.merism = '4-merous'
Mimosa_spixiana.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_spixiana.flower.calyx = new Calyx()
Mimosa_spixiana.flower.calyx.shape = 'campanulate'
Mimosa_spixiana.flower.corolla = new Corolla()
Mimosa_spixiana.flower.corolla.shape = 'turbinate'

Mimosa_spixiana.androecium = new Androecium()
Mimosa_spixiana.androecium.filaments = new Filaments()

Mimosa_spixiana.ginoecium = new Ginoecium()
Mimosa_spixiana.ginoecium.ovary = new Ovary()

Mimosa_spixiana.fruit = new Fruit()
Mimosa_spixiana.fruit.stipe = new Stipe()
Mimosa_spixiana.fruit.replum = new Replum()
Mimosa_spixiana.fruit.epicarp = new Epicarp()

Mimosa_spixiana.seed = new Seed()


// Description authorship
Mimosa_spixiana.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_spixiana.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709351 
})


// Sources


// Export Mimosa spixiana
export { Mimosa_spixiana }