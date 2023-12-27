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


// Description of Mimosa brachystachya
const Mimosa_brachystachya = new Mimosa()
Mimosa_brachystachya.specificEpithet = 'brachystachya'

Mimosa_brachystachya.stems = new Stems()

Mimosa_brachystachya.stipule = new Stipule()
Mimosa_brachystachya.stipule.margin = new MarginStipule()
Mimosa_brachystachya.stipule.adaxial = new AdaxialStipule()
Mimosa_brachystachya.stipule.abaxial = new AbaxialStipule()

Mimosa_brachystachya.leaf = new Leaf()
Mimosa_brachystachya.leaf.petiole = new Petiole()
Mimosa_brachystachya.leaf.bipinnate = new Bipinnate()
Mimosa_brachystachya.leaf.bipinnate.rachis = new Rachis()
Mimosa_brachystachya.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_brachystachya.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_brachystachya.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(2, 4)
Mimosa_brachystachya.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_brachystachya.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_brachystachya.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_brachystachya.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(14, 20)
Mimosa_brachystachya.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_brachystachya.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_brachystachya.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_brachystachya.inflorescence = new Inflorescence()
Mimosa_brachystachya.inflorescence.peduncle = new Peduncle()
Mimosa_brachystachya.inflorescence.capitate = new CapitateInflorescence()

Mimosa_brachystachya.flower = new Flower()
Mimosa_brachystachya.flower.bracteole = new Bracteole()
Mimosa_brachystachya.flower.merism = '3-merous'
Mimosa_brachystachya.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_brachystachya.flower.calyx = new Calyx()
Mimosa_brachystachya.flower.calyx.shape = 'campanulate'
Mimosa_brachystachya.flower.corolla = new Corolla()
Mimosa_brachystachya.flower.corolla.shape = 'turbinate'

Mimosa_brachystachya.androecium = new Androecium()
Mimosa_brachystachya.androecium.filaments = new Filaments()

Mimosa_brachystachya.ginoecium = new Ginoecium()
Mimosa_brachystachya.ginoecium.ovary = new Ovary()

Mimosa_brachystachya.fruit = new Fruit()
Mimosa_brachystachya.fruit.stipe = new Stipe()
Mimosa_brachystachya.fruit.replum = new Replum()
Mimosa_brachystachya.fruit.epicarp = new Epicarp()

Mimosa_brachystachya.seed = new Seed()


// Description authorship
Mimosa_brachystachya.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_brachystachya.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa brachystachya
export { Mimosa_brachystachya }