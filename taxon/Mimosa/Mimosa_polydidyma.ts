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


// Description of Mimosa polydidyma
const Mimosa_polydidyma = new Mimosa()
Mimosa_polydidyma.specificEpithet = 'polydidyma'

Mimosa_polydidyma.stems = new Stems()

Mimosa_polydidyma.stipule = new Stipule()
Mimosa_polydidyma.stipule.margin = new MarginStipule()
Mimosa_polydidyma.stipule.adaxial = new AdaxialStipule()
Mimosa_polydidyma.stipule.abaxial = new AbaxialStipule()

Mimosa_polydidyma.leaf = new Leaf()
Mimosa_polydidyma.leaf.petiole = new Petiole()
Mimosa_polydidyma.leaf.bipinnate = new Bipinnate()
Mimosa_polydidyma.leaf.bipinnate.rachis = new Rachis()
Mimosa_polydidyma.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_polydidyma.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_polydidyma.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_polydidyma.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_polydidyma.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_polydidyma.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMin(12)
Mimosa_polydidyma.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(13, 20)
Mimosa_polydidyma.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsRarelyMax(21)
Mimosa_polydidyma.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_polydidyma.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_polydidyma.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_polydidyma.inflorescence = new Inflorescence()
Mimosa_polydidyma.inflorescence.peduncle = new Peduncle()
Mimosa_polydidyma.inflorescence.capitate = new CapitateInflorescence()

Mimosa_polydidyma.flower = new Flower()
Mimosa_polydidyma.flower.bracteole = new Bracteole()
Mimosa_polydidyma.flower.merism = '3-merous'
Mimosa_polydidyma.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_polydidyma.flower.calyx = new Calyx()
Mimosa_polydidyma.flower.calyx.shape = 'campanulate'
Mimosa_polydidyma.flower.corolla = new Corolla()
Mimosa_polydidyma.flower.corolla.shape = 'turbinate'

Mimosa_polydidyma.androecium = new Androecium()
Mimosa_polydidyma.androecium.filaments = new Filaments()
Mimosa_polydidyma.androecium.filaments.colour = 'pinkish'

Mimosa_polydidyma.ginoecium = new Ginoecium()
Mimosa_polydidyma.ginoecium.ovary = new Ovary()

Mimosa_polydidyma.fruit = new Fruit()
Mimosa_polydidyma.fruit.stipe = new Stipe()
Mimosa_polydidyma.fruit.replum = new Replum()
Mimosa_polydidyma.fruit.epicarp = new Epicarp()

Mimosa_polydidyma.seed = new Seed()


// Description authorship
Mimosa_polydidyma.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_polydidyma.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709350 
})


// Sources


// Export Mimosa polydidyma
export { Mimosa_polydidyma }