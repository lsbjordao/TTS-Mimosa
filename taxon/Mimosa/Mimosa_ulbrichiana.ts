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


// Description of Mimosa ulbrichiana
const Mimosa_ulbrichiana = new Mimosa()
Mimosa_ulbrichiana.specificEpithet = 'ulbrichiana'

Mimosa_ulbrichiana.stems = new Stems()

Mimosa_ulbrichiana.stipule = new Stipule()
Mimosa_ulbrichiana.stipule.margin = new MarginStipule()
Mimosa_ulbrichiana.stipule.adaxial = new AdaxialStipule()
Mimosa_ulbrichiana.stipule.abaxial = new AbaxialStipule()

Mimosa_ulbrichiana.leaf = new Leaf()
Mimosa_ulbrichiana.leaf.petiole = new Petiole()
Mimosa_ulbrichiana.leaf.bipinnate = new Bipinnate()
Mimosa_ulbrichiana.leaf.bipinnate.rachis = new Rachis()
Mimosa_ulbrichiana.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_ulbrichiana.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_ulbrichiana.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(3, 5)
Mimosa_ulbrichiana.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_ulbrichiana.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_ulbrichiana.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_ulbrichiana.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(15, 22)
Mimosa_ulbrichiana.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMax(24)
Mimosa_ulbrichiana.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_ulbrichiana.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_ulbrichiana.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_ulbrichiana.inflorescence = new Inflorescence()
Mimosa_ulbrichiana.inflorescence.peduncle = new Peduncle()
Mimosa_ulbrichiana.inflorescence.capitate = new CapitateInflorescence()

Mimosa_ulbrichiana.flower = new Flower()
Mimosa_ulbrichiana.flower.bracteole = new Bracteole()
Mimosa_ulbrichiana.flower.merism = '3-merous'
Mimosa_ulbrichiana.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_ulbrichiana.flower.calyx = new Calyx()
Mimosa_ulbrichiana.flower.calyx.shape = 'campanulate'
Mimosa_ulbrichiana.flower.corolla = new Corolla()
Mimosa_ulbrichiana.flower.corolla.shape = 'subtubular'

Mimosa_ulbrichiana.androecium = new Androecium()
Mimosa_ulbrichiana.androecium.filaments = new Filaments()
Mimosa_ulbrichiana.androecium.filaments.colour = 'pinkish'

Mimosa_ulbrichiana.ginoecium = new Ginoecium()
Mimosa_ulbrichiana.ginoecium.ovary = new Ovary()

Mimosa_ulbrichiana.fruit = new Fruit()
Mimosa_ulbrichiana.fruit.stipe = new Stipe()
Mimosa_ulbrichiana.fruit.replum = new Replum()
Mimosa_ulbrichiana.fruit.epicarp = new Epicarp()

Mimosa_ulbrichiana.seed = new Seed()


// Description authorship
Mimosa_ulbrichiana.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_ulbrichiana.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709351 
})


// Sources


// Export Mimosa ulbrichiana
export { Mimosa_ulbrichiana }