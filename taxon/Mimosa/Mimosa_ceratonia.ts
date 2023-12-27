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


// Description of Mimosa ceratonia
const Mimosa_ceratonia = new Mimosa()
Mimosa_ceratonia.specificEpithet = 'ceratonia'

Mimosa_ceratonia.stems = new Stems()

Mimosa_ceratonia.stipule = new Stipule()
Mimosa_ceratonia.stipule.margin = new MarginStipule()
Mimosa_ceratonia.stipule.adaxial = new AdaxialStipule()
Mimosa_ceratonia.stipule.abaxial = new AbaxialStipule()

Mimosa_ceratonia.leaf = new Leaf()
Mimosa_ceratonia.leaf.petiole = new Petiole()
Mimosa_ceratonia.leaf.bipinnate = new Bipinnate()
Mimosa_ceratonia.leaf.bipinnate.rachis = new Rachis()
Mimosa_ceratonia.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_ceratonia.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_ceratonia.leaf.bipinnate.pinnae.setNumberOfPairsMinMax(2, 4)
Mimosa_ceratonia.leaf.bipinnate.pinnae.setNumberOfPairsRarelyMax(5)
Mimosa_ceratonia.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_ceratonia.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_ceratonia.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_ceratonia.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(3, 5)
Mimosa_ceratonia.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_ceratonia.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_ceratonia.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_ceratonia.inflorescence = new Inflorescence()
Mimosa_ceratonia.inflorescence.peduncle = new Peduncle()
Mimosa_ceratonia.inflorescence.capitate = new CapitateInflorescence()

Mimosa_ceratonia.flower = new Flower()
Mimosa_ceratonia.flower.bracteole = new Bracteole()
Mimosa_ceratonia.flower.merism = '3-merous'
Mimosa_ceratonia.flower.numberWhorlsOfStamens = 'diplostemonous'
Mimosa_ceratonia.flower.calyx = new Calyx()
Mimosa_ceratonia.flower.calyx.shape = 'campanulate'
Mimosa_ceratonia.flower.corolla = new Corolla()
Mimosa_ceratonia.flower.corolla.shape = 'vase-shaped'

Mimosa_ceratonia.androecium = new Androecium()
Mimosa_ceratonia.androecium.filaments = new Filaments()
Mimosa_ceratonia.androecium.filaments.colour = ['whitenish', 'creamish']

Mimosa_ceratonia.ginoecium = new Ginoecium()
Mimosa_ceratonia.ginoecium.ovary = new Ovary()

Mimosa_ceratonia.fruit = new Fruit()
Mimosa_ceratonia.fruit.stipe = new Stipe()
Mimosa_ceratonia.fruit.replum = new Replum()
Mimosa_ceratonia.fruit.epicarp = new Epicarp()

Mimosa_ceratonia.seed = new Seed()


// Description authorship
Mimosa_ceratonia.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_ceratonia.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709349 
})


// Sources


// Export Mimosa ceratonia
export { Mimosa_ceratonia }