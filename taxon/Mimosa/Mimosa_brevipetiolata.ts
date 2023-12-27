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


// Description of Mimosa brevipetiolata
const Mimosa_brevipetiolata = new Mimosa()
Mimosa_brevipetiolata.specificEpithet = 'brevipetiolata'

Mimosa_brevipetiolata.stems = new Stems()

Mimosa_brevipetiolata.stipule = new Stipule()
Mimosa_brevipetiolata.stipule.margin = new MarginStipule()
Mimosa_brevipetiolata.stipule.adaxial = new AdaxialStipule()
Mimosa_brevipetiolata.stipule.abaxial = new AbaxialStipule()

Mimosa_brevipetiolata.leaf = new Leaf()
Mimosa_brevipetiolata.leaf.petiole = new Petiole()
Mimosa_brevipetiolata.leaf.bipinnate = new Bipinnate()
Mimosa_brevipetiolata.leaf.bipinnate.rachis = new Rachis()
Mimosa_brevipetiolata.leaf.bipinnate.rachis.spicule = new Spicule()
Mimosa_brevipetiolata.leaf.bipinnate.pinnae = new Pinnae()
Mimosa_brevipetiolata.leaf.bipinnate.pinnae.setNumberOfPairs(1)
Mimosa_brevipetiolata.leaf.bipinnate.pinnae.paraphillidia = new Paraphillidia()
Mimosa_brevipetiolata.leaf.bipinnate.pinnae.rachilla = new Rachilla()
Mimosa_brevipetiolata.leaf.bipinnate.pinnae.leaflet = new Leaflet()
Mimosa_brevipetiolata.leaf.bipinnate.pinnae.leaflet.setNumberOfPairsMinMax(10, 28)
Mimosa_brevipetiolata.leaf.bipinnate.pinnae.leaflet.margin = new MarginLeaflet()
Mimosa_brevipetiolata.leaf.bipinnate.pinnae.leaflet.adaxial = new AdaxialLeaflet()
Mimosa_brevipetiolata.leaf.bipinnate.pinnae.leaflet.abaxial = new AbaxialLeaflet()

Mimosa_brevipetiolata.inflorescence = new Inflorescence()
Mimosa_brevipetiolata.inflorescence.peduncle = new Peduncle()
Mimosa_brevipetiolata.inflorescence.capitate = new CapitateInflorescence()

Mimosa_brevipetiolata.flower = new Flower()
Mimosa_brevipetiolata.flower.bracteole = new Bracteole()
Mimosa_brevipetiolata.flower.merism = '4-merous'
Mimosa_brevipetiolata.flower.numberWhorlsOfStamens = 'isostemonous'
Mimosa_brevipetiolata.flower.calyx = new Calyx()
Mimosa_brevipetiolata.flower.corolla = new Corolla()
Mimosa_brevipetiolata.flower.corolla.shape = ['turbinate', 'funnelform']

Mimosa_brevipetiolata.androecium = new Androecium()
Mimosa_brevipetiolata.androecium.filaments = new Filaments()
Mimosa_brevipetiolata.androecium.filaments.colour = 'pinkish'

Mimosa_brevipetiolata.ginoecium = new Ginoecium()
Mimosa_brevipetiolata.ginoecium.ovary = new Ovary()

Mimosa_brevipetiolata.fruit = new Fruit()
Mimosa_brevipetiolata.fruit.stipe = new Stipe()
Mimosa_brevipetiolata.fruit.replum = new Replum()
Mimosa_brevipetiolata.fruit.epicarp = new Epicarp()

Mimosa_brevipetiolata.seed = new Seed()


// Description authorship
Mimosa_brevipetiolata.descriptionAuthorship = new DescriptionAuthorship()
Mimosa_brevipetiolata.descriptionAuthorship.addAuthor({
    name: 'Barneby',
    date: 1703709349 
})


// Sources


// Export Mimosa brevipetiolata
export { Mimosa_brevipetiolata }