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


// Description of Mimosa hatschbachii
const Mimosa_hatschbachii = new Mimosa()
Mimosa_hatschbachii.specificEpithet = 'hatschbachii'

Mimosa_hatschbachii.stems = new Stems()

Mimosa_hatschbachii.stipule = new Stipule()
Mimosa_hatschbachii.stipule.margin = new MarginStipule()
Mimosa_hatschbachii.stipule.adaxial = new AdaxialStipule()
Mimosa_hatschbachii.stipule.abaxial = new AbaxialStipule()

Mimosa_hatschbachii.leaf = new Leaf()
Mimosa_hatschbachii.leaf.petiole = new Petiole()
Mimosa_hatschbachii.leaf.bipinnate = new Bipinnate()
Mimosa_hatschbachii.leaf.bipinnate.rachis = new Rachis()
Mimosa_hatschbachii.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_hatschbachii.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_hatschbachii.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(4, 6)
Mimosa_hatschbachii.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMax(7)
Mimosa_hatschbachii.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_hatschbachii.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_hatschbachii.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_hatschbachii.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(5)
Mimosa_hatschbachii.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(6, 7)
Mimosa_hatschbachii.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_hatschbachii.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_hatschbachii.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_hatschbachii.inflorescence = new Inflorescence()
Mimosa_hatschbachii.inflorescence.peduncle = new Peduncle()
Mimosa_hatschbachii.inflorescence.capitate = new CapitateInflorescence()

Mimosa_hatschbachii.flower = new Flower()
Mimosa_hatschbachii.flower.bracteole = new Bracteole()
Mimosa_hatschbachii.flower.merism = '4-merous'
Mimosa_hatschbachii.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_hatschbachii.flower.calyx = new Calyx()
Mimosa_hatschbachii.flower.calyx.shape = 'campanulate'
Mimosa_hatschbachii.flower.corolla = new Corolla()
Mimosa_hatschbachii.flower.corolla.shape = 'turbinate'

Mimosa_hatschbachii.androecium = new Androecium()
Mimosa_hatschbachii.androecium.filaments = new Filaments()
Mimosa_hatschbachii.androecium.filaments.colour = 'pinkish'

Mimosa_hatschbachii.ginoecium = new Ginoecium()
Mimosa_hatschbachii.ginoecium.ovary = new Ovary()

Mimosa_hatschbachii.fruit = new Fruit()
Mimosa_hatschbachii.fruit.stipe = new Stipe()
Mimosa_hatschbachii.fruit.replum = new Replum()
Mimosa_hatschbachii.fruit.epicarp = new Epicarp()

Mimosa_hatschbachii.seed = new Seed()


// Description authorship
Mimosa_hatschbachii.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_hatschbachii.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709352 
})


// Sources


// Export Mimosa hatschbachii
export { Mimosa_hatschbachii }